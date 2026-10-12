# Redesign: "Style inspiration — A glimpse of the mood" section

## Current problem
The three editorial images in this section (lines 262–269 of `src/routes/index.tsx`) render with inconsistent placement: the middle image is pushed up with `md:-mt-8`, and image treatment varies. The result is misaligned edges and uneven-looking sizes.

## Redesign (this section only)

Keep the deep berry background, gold eyebrow label, heading, and the illustrative-imagery disclaimer (brand rules). Rebuild the gallery so all three images are perfectly uniform:

1. **Uniform image cards** — all three images use the identical aspect ratio (`aspect-[4/5]`), `object-cover`, and no offset transforms. Every image aligns to the same top and bottom edge at every breakpoint.
2. **Single-column stack on mobile, equal thirds on desktop** — `grid grid-cols-1 gap-4 md:grid-cols-3` with consistent gaps; no negative margins or stagger.
3. **Editorial captions** — add a small caption row under each image (gold label like "Gold-toned", "Oxidized & Dokra", "Beauty & Styling") in Karla, so the section reads as a styled moodboard rather than a plain image strip.
4. **Rounded corners + subtle gold border** — wrap each image in a `border border-gold/30` frame with a soft corner radius to match the festive editorial direction.
5. **Header row** — keep the existing heading layout (eyebrow + heading left, disclaimer right), tightened for balance with the new grid.
6. Preserve the disclaimer wording so imagery stays clearly labelled as illustrative (project knowledge rule).

## Files changed
- `src/routes/index.tsx` — only the section at lines 262–269.

## Verification
- Check the build log for errors after the edit.
- Playwright screenshot of the section at desktop and mobile widths to confirm all three images share the same size, top/bottom alignment, and captions render.
