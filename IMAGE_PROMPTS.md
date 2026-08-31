# Image prompts — Gloss & Glow

Every photo on the site is referenced by a fixed path. To add or change a
photo, save your file to `assets/img/` **using the exact filename below**.
Nothing in the HTML, CSS or JavaScript needs to change.

Until a file exists, that slot shows a composed dark gradient panel instead of
a broken image, so the site looks finished at every stage.

---

## House style — paste this into every prompt

> Photorealistic editorial photography for a high-end beauty and barber studio
> in Glendale, California. Matte black walls, warm cream and champagne
> surfaces, brushed brass and warm-neutral fixtures, natural oak. Soft
> directional daylight with a warm key and gentle falloff, shallow depth of
> field, calm and uncluttered composition, muted warm-neutral color grade with
> no strong color cast. No text, no lettering, no signage, no logos, no
> watermarks anywhere in the frame. Natural-looking people with realistic skin
> texture, relaxed and unposed. No brand names on any product. Clean, modern,
> expensive but restrained.

**Negative prompt (all images):** text, letters, words, signage, logos,
watermarks, distorted hands, extra fingers, plastic skin, heavy retouching,
neon colors, hot pink, purple lighting, cluttered background, cheap salon
stock-photo look, harsh flash, oversaturated, HDR, collage, frame, border.

---

## Format reference

| Slot type | Aspect | Suggested export |
|---|---|---|
| Page heroes | 3:2 landscape | 1920 × 1280 |
| Home service cards | 4:5 portrait | 800 × 1000 |
| Service page strips | 1:1 square | 800 × 800 |
| Split panels | 16:10 landscape | 1400 × 875 |
| Open Graph | 1.91:1 landscape | 1200 × 630 |

Export as **PNG**, then compress (TinyPNG, Squoosh, ImageOptim). Aim for under
about 300 KB per photo so the site stays fast on mobile data.

---

## 1. Brand — supplied

### `logo.png`
The Gloss & Glow lockup — arc, twin profiles and wordmark. A trimmed
transparent PNG, used in the home hero, the footer and the favicon. Replace it
at the same path if the logo is ever redrawn, and export with transparency; a
logo with a solid background renders as a visible box over the hero
photograph.

### `logo-mark.png`
The emblem on its own, cropped from `logo.png`. Used in the header, where the
full lockup would be too small to read. Replace both files together.

### `badge-hair.png`, `badge-barber.png`, `badge-nails.png`
The three category emblems, transparent and cropped to a shared bounding box so
they stay optically the same size next to each other. They appear on the home
page service cards.

### `badge-skin.png` — **not yet supplied**
The one missing piece. Until the file exists, the site draws a matching
emblem — a thin gold ring, a sparkle cluster and `SKIN` set in Cormorant
Garamond with flanking rules. It reads correctly beside the other three, but a
generated badge will match them better.

To make one that fits the set, generate it on a **pure black background** at
1254 × 1254 with this prompt:

> Luxury minimalist logo badge on a pure black background. A single thin
> polished gold line-art emblem inside a thin gold circular ring: a delicate
> face in three-quarter view with a hand resting lightly against the cheek,
> drawn in one continuous fine gold line, elegant and serene. Two small
> four-pointed gold sparkles inside the ring, one to the left and one to the
> right of the figure. Below the ring, the word "SKIN" in an elegant
> high-contrast gold serif capital, widely letter-spaced, flanked by a short
> thin gold dash on each side, with a slim gold divider line and a small
> four-pointed sparkle beneath it. Warm champagne and gold gradient on the
> metal. Perfectly centered, symmetrical, generous black margin. Flat vector
> emblem style, crisp thin strokes, no background texture, no other text.

**Negative prompt:** photograph, 3D render, drop shadow, background texture,
gray or white background, extra words, watermark, cluttered detail, thick
strokes, neon colors.

Save the result as `assets/img/badge-skin.png`. The site swaps it in with no
code changes. Any background will do as long as it is solid black — the site
composites it as-is, so if the black is not fully transparent it will show as a
dark tile; use a transparency tool, or ask for the badge on a transparent
background directly.

---

## 2. Home page

### `home-hero.png` — 3:2 landscape, 1920 × 1280
> Wide interior view of a modern beauty and barber studio, shot from the
> entrance. Matte black walls, a row of styling stations with large frameless
> mirrors and warm brass sconces, cream leather chairs, pale oak floor, a
> single tall window on the left throwing soft daylight across the room. One or
> two people working in the far background, softly out of focus. Empty
> foreground space in the lower half so overlaid text remains readable. Calm,
> spacious, editorial. House style. No text or signage anywhere.

### `home-hair.png` — 4:5 portrait, 800 × 1000
> A hair stylist finishing a blow-dry on a seated client at a black styling
> station, round brush in hand, warm daylight from the side, mirror softly
> reflecting the room behind. Cream cape, brass fittings, uncluttered counter.
> Warm neutral grade, shallow depth of field. House style.

### `home-barber.png` — 4:5 portrait, 800 × 1000
> A barber working a clipper fade on a seated client in a classic black leather
> barber chair, hands and clipper sharp in focus, warm side light, dark wall
> behind with a simple brass shelf out of focus. Confident, quiet, masculine
> without being rugged or vintage-themed. House style.

### `home-nails.png` — 4:5 portrait, 800 × 1000
> Close overhead-angled view of a manicure in progress at a pale oak nail
> table. Technician's hands and client's hands both in frame, neat neutral
> nails, small tools laid out on a cream cloth, warm daylight from the left,
> soft shadows. Clean and precise. House style.

### `home-skin.png` — 4:5 portrait, 800 × 1000
> A calm treatment room with a cream treatment bed, folded warm towels, a low
> brass lamp and a small tray of unbranded amber glass bottles. Soft diffused
> light, no client in frame, or one person resting with eyes closed seen from
> above the shoulders. Serene and clinical-clean without looking medical.
> House style.

---

## 3. Hair page

### `hair-hero.png` — 3:2 landscape, 1920 × 1280
> Wide view along a row of hair styling stations, a stylist mid-cut with a
> client in the middle distance, large mirrors reflecting warm light, matte
> black cabinetry and cream chairs. Room to the left of frame for overlaid
> text. House style.

### `hair-women.png` — 1:1 square, 800 × 800
> Long hair being sectioned and cut with scissors at a styling station, stylist
> hands in sharp focus, hair falling in soft light, warm neutral tones, blurred
> mirror behind. House style.

### `hair-men.png` — 1:1 square, 800 × 800
> A men's haircut being finished with scissors over comb at a hair styling
> chair, tidy and modern, warm daylight, dark background. Salon setting rather
> than a barbershop setting. House style.

### `hair-color.png` — 1:1 square, 800 × 800
> Hair color being applied to neatly sectioned hair with a tint brush, foils
> and a color bowl visible, gloved hands, soft warm light on a dark
> background. Neutral shades only, no vivid fashion colors. House style.

### `hair-styling.png` — 1:1 square, 800 × 800
> A round-brush blow-dry in progress, hair mid-motion under the dryer, warm
> backlight catching the strands, black station and mirror softly out of focus
> behind. House style.

---

## 4. Barber page

### `barber-hero.png` — 3:2 landscape, 1920 × 1280
> A barber section inside a modern studio: two classic black leather barber
> chairs, a dark tiled wall, brass fixtures, a folded stack of white towels, a
> barber working on a client in the middle distance. Slightly cooler and more
> graphic than the hair area but the same warm-neutral palette. Room on the
> left for overlaid text. House style.

### `barber-haircut.png` — 1:1 square, 800 × 800
> A classic scissor haircut in a barber chair, comb and scissors in sharp
> focus at the side of the head, warm rim light, dark background. House style.

### `barber-fade.png` — 1:1 square, 800 × 800
> Detailed close-up of clipper work on a mid fade at the back of the head,
> clean blend visible, clipper in sharp focus, warm directional light on a
> dark background. House style.

### `barber-beard.png` — 1:1 square, 800 × 800
> A beard being shaped, straight razor or trimmer defining the cheek line,
> barber's hands steady and in focus, warm light, dark background, calm
> expression on the client. House style.

### `barber-grooming.png` — 1:1 square, 800 × 800
> A barber station still life: rolled hot towels in a warmer, a straight razor,
> a badger brush and an unbranded amber bottle on a dark stone counter, warm
> low light, brass details. No people. No visible labels. House style.

---

## 5. Nails page

### `nails-hero.png` — 3:2 landscape, 1920 × 1280
> Wide view of a nail area: two pale oak manicure tables with cream chairs
> against a matte black wall, brass task lamps, a small vase of dried grasses,
> soft daylight from the right, a technician working with a client in the
> middle distance. Room on the left for overlaid text. House style.

### `nails-manicure.png` — 1:1 square, 800 × 800
> Close view of a manicure: technician shaping a nail with a file, client's
> hand resting on a folded cream towel, neutral polish, warm light, shallow
> depth of field. Well-formed realistic hands. House style.

### `nails-pedicure.png` — 1:1 square, 800 × 800
> A pedicure station prepared and in use: a cream basin, folded towels, feet
> resting comfortably, technician's gloved hands working, warm soft light,
> dark surroundings. Tasteful and non-clinical. House style.

### `nails-gel.png` — 1:1 square, 800 × 800
> Gel polish being applied with a fine brush, small bottle of neutral gel in
> frame, LED curing lamp glowing softly out of focus behind, warm and precise,
> dark background. House style.

---

## 6. Skin page

### `skin-hero.png` — 3:2 landscape, 1920 × 1280
> Wide view of a serene treatment room: cream treatment bed with crisp linen,
> a rolling trolley with folded towels and unbranded amber bottles, a soft
> warm lamp, dark walls, sheer curtain diffusing daylight. No client or one
> person resting with eyes closed. Room on the left for overlaid text.
> House style.

### `skin-facial.png` — 1:1 square, 800 × 800
> A facial in progress, esthetician's gloved hands applying product to a
> relaxed client's face, eyes closed, headband in place, soft even light, calm
> and hygienic. Realistic skin texture, no heavy retouching. House style.

### `skin-treatment.png` — 1:1 square, 800 × 800
> Still life of skincare tools and products on a cream tray: unbranded amber
> and frosted glass bottles, a small ceramic bowl, folded gauze, a soft brush,
> on a dark stone surface with warm low light. No labels or text. House style.

---

## 7. Contact page

### `contact-hero.png` — 3:2 landscape, 1920 × 1280
> Exterior of a modern studio storefront on a quiet Glendale street at golden
> hour: matte black frontage, large clean windows with warm interior light
> glowing through, a slim brass door handle, planters either side, soft palm
> shadows on the pavement. Deliberately no signage or lettering on the
> building. Inviting and understated. House style.

---

## 8. Social sharing

### `og-image.png` — 1.91:1 landscape, 1200 × 630
> Wide, simple, dark composition for a social share card: matte black textured
> wall filling the frame with a warm champagne light gradient falling from the
> upper left, generous empty space in the centre. This image is used as the
> background for link previews, so keep it visually calm.

After generating the background, place the Gloss & Glow logo centered on it in
an image editor and export as `og-image.png`. Facebook, LinkedIn, iMessage and
X all crop link previews differently, so keep the logo well inside the middle
70% of the frame.

---

## Using generated images honestly

These prompts produce **design and lifestyle imagery only**. Do not present
generated photos as real clients, completed work, before-and-after results or
portfolio pieces, and do not add signage or branding into them.

When you have real photography of the studio — and of client work, with the
client's permission — replace these files with it. Same filenames, same paths,
no code changes.
