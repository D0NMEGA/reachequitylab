#!/usr/bin/env python3
"""Propagate the canonical header and footer into every page at the repo root.

The site is plain static HTML with no build step, so the nav and footer are
physically duplicated in each page. This keeps those copies identical and marks
the current page's nav link active. Run it after editing tools/partials/*.html.
"""

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PARTIALS = ROOT / "tools" / "partials"

# r.html is a standalone recruitment page with its own chrome.
SKIP = {"r.html"}

BLOCKS = (("header", "header.html"), ("footer", "footer.html"))


def read(path: pathlib.Path) -> str:
    """Read without translating newlines, so CRLF files stay CRLF."""
    with open(path, newline="") as handle:
        return handle.read()


def write(path: pathlib.Path, text: str) -> None:
    with open(path, "w", newline="") as handle:
        handle.write(text)


def active_nav(header: str, page: str) -> str:
    """Mark the nav link pointing at `page` as active, leaving the CTA styled."""

    def repl(match: re.Match) -> str:
        tag, href = match.group(0), match.group(1)
        if href != page:
            return tag
        if 'class="' in tag:
            return tag.replace('class="', 'class="active ', 1)
        return tag.replace(f'href="{href}"', f'href="{href}" class="active"', 1)

    return re.sub(r'<a href="([^"]+)" data-transition[^>]*>', repl, header)


def main() -> int:
    partials = {name: read(PARTIALS / f) for name, f in BLOCKS}
    changed = []

    for path in sorted(ROOT.glob("*.html")):
        if path.name in SKIP:
            continue
        html = original = read(path)

        for name in partials:
            start, end = f"<!-- {name}:start -->", f"<!-- {name}:end -->"
            if start not in html or end not in html:
                print(f"warn: {path.name} missing {name} markers, skipped")
                continue
            block = partials[name]
            if name == "header":
                block = active_nav(block, path.name)
            html = re.sub(
                re.escape(start) + r".*?" + re.escape(end),
                f"{start}\n{block.rstrip()}\n  {end}",
                html,
                flags=re.S,
            )

        if html != original:
            write(path, html)
            changed.append(path.name)

    print(f"synced {len(changed)} page(s): {', '.join(changed) or 'none'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
