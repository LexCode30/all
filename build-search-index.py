#!/usr/bin/env python3
"""Build search-index.json for the course library.

Reads the published catalog, fetches each course's course.json and writes a
single compact index of every chapter and video. Run it after publishing new
courses, then commit the result to the `all` repository.

    python3 build-search-index.py                 # writes ./search-index.json
    python3 build-search-index.py --out <path>
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from concurrent.futures import ThreadPoolExecutor

import requests

CATALOG = "https://lexcode30.github.io/all/"
TIMEOUT = 30
WORKERS = 8
COURSES_RE = re.compile(r"(?:const|let|var)\s+courses\s*=\s*")
HREF_RE = re.compile(r"^s(\d+)\.html#v-(.+)$")


def find_array(text: str) -> str:
    """The courses array literal, located by balancing brackets."""
    match = COURSES_RE.search(text)
    if not match or match.end() >= len(text) or text[match.end()] != "[":
        raise SystemExit("could not find 'const courses = [ ... ]' in the catalog")
    depth, in_string, escaped = 0, False, False
    for i in range(match.end(), len(text)):
        char = text[i]
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
            continue
        if char == '"':
            in_string = True
        elif char in "[{":
            depth += 1
        elif char in "]}":
            depth -= 1
            if depth == 0:
                return text[match.end():i + 1]
    raise SystemExit("the courses array is not closed")


def fetch_course(entry: dict) -> tuple[dict, dict | None]:
    url = entry["link"].rstrip("/") + "/course.json"
    try:
        response = requests.get(url, timeout=TIMEOUT)
        return entry, response.json() if response.status_code == 200 else None
    except Exception:
        return entry, None


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--catalog", default=CATALOG)
    parser.add_argument("--out", default="search-index.json")
    args = parser.parse_args()

    catalog = args.catalog.rstrip("/") + "/"
    print(f"reading {catalog}script.js")
    entries = json.loads(find_array(requests.get(catalog + "script.js", timeout=TIMEOUT).text))
    print(f"  {len(entries)} courses listed")

    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        fetched = list(pool.map(fetch_course, entries))

    # Ordered by repository name, the same order the generator writes, so
    # running this after the generator produces an identical file.
    fetched.sort(key=lambda pair: pair[0]["link"].rstrip("/").rsplit("/", 1)[-1])

    courses: list = []
    chapters: list = []
    videos: list = []
    missing: list[str] = []

    for entry, data in fetched:
        if not data or not data.get("chapters"):
            missing.append(entry["title"])
            continue
        course_index = len(courses)
        courses.append([
            data.get("name") or entry["title"],
            data.get("slug") or entry["link"].rstrip("/").rsplit("/", 1)[-1],
            entry.get("category", "other"),
        ])
        for chapter in data["chapters"]:
            chapter_index = len(chapters)
            chapters.append([course_index, chapter["number"], chapter["title"]])
            for video in chapter.get("videos", []):
                match = HREF_RE.match(video.get("href", ""))
                if not match or int(match.group(1)) != chapter["number"]:
                    continue
                videos.append([chapter_index, video["title"], match.group(2)])

    index = {"v": 1, "courses": courses, "chapters": chapters, "videos": videos}
    body = json.dumps(index, separators=(",", ":"), ensure_ascii=False)
    with open(args.out, "w", encoding="utf-8") as handle:
        handle.write(body)

    print(f"  {len(courses)} courses, {len(chapters)} chapters, {len(videos)} videos")
    print(f"  wrote {args.out} ({len(body.encode()) / 1024:.0f} KB)")
    if missing:
        print(f"  no course.json for {len(missing)}: {', '.join(missing[:5])}"
              + (" ..." if len(missing) > 5 else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
