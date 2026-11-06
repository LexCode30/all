# Catalog page for the `all` repository

A drop-in replacement for the three files in `LexCode30/all`, restyled to
match the course pages and wired to the progress they already store.

## Installing

Copy these into the `all` repository, replacing what is there:

- `index.html`
- `styles.css`
- `script.js` — already carries your live 39 courses
- `favicon.svg` (new)
- `search-index.json` (new) — the video search index
- `build-search-index.py` (new) — regenerates that index

Leave `Images/` exactly as it is.

`script.js` was populated from your live catalog, so its array already matches
what is published. If you have added courses since, copy your current array in
over it; everything below the array is new.

## What changed

Design now shares the course pages' tokens — Inter, the indigo/cyan palette,
the same glassmorphism, radii and shadows — so the hub and the courses read as
one site. A header, hero and footer were added; the old stylesheet had rules
for a header and footer that no markup ever used.

Added: a dark/light toggle that writes the same `cs:theme` key the course
pages use, so the reader's choice carries across the whole site; per-category
counts on the filter chips, with empty categories hidden; a sort control
(default / A–Z / progress); `/` to focus search, matching the course pages;
a favicon and Open Graph tags.

### Progress

Every course and this page are served from `lexcode30.github.io`, one origin,
so this page can read what the course pages store:

- `cs:<slug>:v:<videoId>` — one key per completed video
- `cs:<slug>:last` — the last video watched
- `cs:<slug>:total` — cached here, see below

Each card shows a progress bar and "12 of 84 videos", links straight to the
last video watched, and switches its label between *Start course*,
*Continue* and *Watch again*. Finished courses get a Completed badge, and the
hero counts how many are in progress and done.

To turn a count into a ratio the page needs each course's video count. It
reads `course.json`, which the generator already publishes in every course
repository, and caches the number in `cs:<slug>:total`. Only courses that have
been started are fetched, once each — so an untouched library makes no extra
requests at all.

### Fixes

`lazyLoadImages()` was dead code: it assigned `img.dataset.src`, which
`createCourseCard` never set, so it ran on every card and did nothing.
Removed.

Cards were built with `innerHTML` and unescaped values, so a course title
containing a quote or `<` could break the card or inject markup, and an image
path containing a quote broke the CSS `url()`. Cards are now built with
`createElement` and `textContent`.

## Searching every video

The search box searches course titles **and the title of every video in every
course**. Searching `nmap` lists the seven videos that teach it, each showing
which course and chapter it belongs to, and clicking one opens that course at
that exact video.

It reads `search-index.json`: one file holding every course, chapter and video
with the anchor its page uses. Measured on your library — 39 courses, 493
chapters, 3,434 videos — that is 265 KB, about 132 KB over the wire. Fetching
each course's `course.json` instead would be 981 KB across 39 requests.

The index is **not** loaded when someone just browses the library. It is
fetched when the search box is focused, then cached in this browser, and
refreshed quietly in the background if it is more than six hours old. The
category chips narrow video results as well as courses, long result lists page
25 at a time, and a search is kept in the URL as `?q=nmap` so it can be shared.

### Keeping the index current

**The generator does this for you.** Publishing a course stages its videos,
and at the end of the run they are merged into `search-index.json` in this
repository in a single commit — one commit for a batch of twenty, not twenty
copies of a quarter-megabyte file. Re-publishing a course replaces its entries
rather than duplicating them. If the write fails, the run says so and the
index is simply missing that batch.

`build-search-index.py` rebuilds the file from scratch, by reading the
published catalog and every course's `course.json`. Use it to repair the index
after a failed write, or to build it the first time:

```bash
python3 build-search-index.py
```

Both routes produce a byte-identical file, so running the builder after the
generator changes nothing.

## Generator compatibility

The generator only rewrites the `const courses = [ ... ];` array and leaves
the rest of the file alone. Verified against this file: it locates the array,
rewrites all eighteen entries keeping the four fields in order, reproduces
your `Images/<repo-name>.png` paths, and leaves every line of the surrounding
code untouched.
