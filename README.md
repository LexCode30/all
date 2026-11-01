# Catalog page for the `all` repository

A drop-in replacement for the three files in `LexCode30/all`, restyled to
match the course pages and wired to the progress they already store.

## Installing

Copy these into the `all` repository, replacing what is there:

- `index.html`
- `styles.css`
- `script.js` — **see the note below**
- `favicon.svg` (new)

Leave `Images/` exactly as it is.

**Before replacing `script.js`, copy your current `courses` array into the new
file**, replacing the single placeholder entry at the top. The array here was
populated from your live catalog as an example, but yours is the source of
truth. Everything below the array is new.

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

## Generator compatibility

The generator only rewrites the `const courses = [ ... ];` array and leaves
the rest of the file alone. Verified against this file: it locates the array,
rewrites all eighteen entries keeping the four fields in order, reproduces
your `Images/<repo-name>.png` paths, and leaves every line of the surrounding
code untouched.
