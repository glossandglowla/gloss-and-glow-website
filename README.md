# Gloss & Glow

Website for **Gloss & Glow**, a beauty and grooming studio in Glendale,
California. Hair, barber, nails and skin.

Plain HTML, CSS and vanilla JavaScript. No framework, no npm, no build step,
no database. It runs on GitHub Pages exactly as it is.

---

## The two files you edit

Everything that changes day to day lives in two places:

| File | Controls |
|---|---|
| `assets/data/services.js` | every service, description and **price** |
| `assets/data/config.js` | address, phone, Square booking link, map, social |

Nothing else needs touching for routine updates. **No price appears in any
HTML file** — the service menus are built from `services.js` when the page
loads, so one edit updates the Hair, Barber, Nails, Skin and home pages at
once.

---

## 1. Changing a price

Open `assets/data/services.js`, find the service, change the number, save.

```js
{ name: "Women's Haircut & Style", price: 85, from: true, featured: true,
  description: "Consultation, shampoo, cut and finish." },
```

Change `85` to `95` and the Hair page and the home page featured list both
show `$95+`. There is no second copy to keep in sync.

### How a price renders

| Data | Shows as |
|---|---|
| `price: 45, from: false` | `$45` |
| `price: 85, from: true` | `$85+` |
| `price: 5, from: true, unit: "per nail"` | `$5+ per nail` |
| `price: null, priceLabel: "Consultation Required"` | `Consultation Required` |

Use `from: true` wherever length, density, design or complexity can move the
final number. Any category containing a starting price automatically shows the
disclaimer beneath its menu.

### Adding, removing and reordering

- **Add** — copy any `{ ... }` block into the group you want and edit it.
- **Remove** — delete its `{ ... }` block.
- **Reorder** — move blocks, or give them an `order` number.
- **New group** — copy a whole `{ id, title, services: [...] }` block.
- **New category** — copy a whole category block and add a matching page.

### Optional fields on a service

```js
{
  name: "Premium Grooming Package",
  price: 85,
  from: false,
  description: "A short muted line under the name.",
  duration: "",                              // e.g. "60 min" — see below
  includes: ["Haircut", "Beard detailing"],  // rendered as "Includes …"
  addons: [{ name: "Scalp massage", price: 15, from: false }],
  featured: true,                            // shows in the home page list
  bookingUrl: ""                             // a Square link for this service
}
```

**Durations are intentionally empty.** No service times were supplied, and a
wrong duration is worse than none — customers plan around them. Add
`duration: "60 min"` to any service and it renders automatically; leave it
empty and nothing shows.

---

## 2. Square Appointments

Every booking button on the site — header, mobile menu, hero, service cards,
every page CTA, footer — reads **one value**:

```js
// assets/data/config.js
squareBookingUrl: "PASTE_SQUARE_APPOINTMENTS_URL_HERE",
```

To connect it:

1. Square Dashboard → **Appointments** → **Online Booking** → **Booking site**.
2. Copy the public booking URL. It usually looks like
   `https://squareup.com/appointments/book/xxxxxxxx/start` or
   `https://book.squareup.com/appointments/xxxxxxxx/location/xxxx/services`.
3. Paste it in place of the placeholder. Save.

Every booking button now opens Square in a new tab.

**Before that link is set**, booking buttons dial the salon instead of leading
to a dead page, and a short line appears explaining that online booking is
opening shortly. Nothing on the site pretends to take a reservation it cannot
take.

### Service-specific booking links

If you later want a particular service to open its own Square page, add a
`bookingUrl` to it in `services.js`. Anything without one falls back to the
main link. The site never needs a second copy of the main URL.

---

## 3. Changing address, phone or map

`assets/data/config.js`:

```js
address: { street: "103 S Kenwood St", city: "Glendale", state: "CA", zip: "91205" },
phone:   { display: "(916) 813-1283", link: "+19168131283" },
```

`display` is what visitors read; `link` is what the Call buttons dial and must
be E.164 — a `+`, the country code, then digits with no spaces.

**Directions** are built from the address automatically, so the Get Directions
buttons already work. To point them at a specific Google Business listing
instead, paste its share link into `directionsUrl`.

The **embedded map** on the contact page uses the same address and needs no API
key. Set `showMapEmbed: false` to remove it.

The address and phone also appear in the JSON-LD block at the top of each HTML
file, which is what search engines read. Update those too if the address ever
changes — six files, one find-and-replace.

---

## 4. Instagram and Facebook

```js
social: { instagram: "", facebook: "" }
```

Both are empty because no accounts were supplied. **While a value is empty its
icon stays hidden** rather than linking nowhere. Paste a real profile URL and
the icon appears in the footer.

If you add profiles, also add both URLs to a `"sameAs"` array in the JSON-LD
block of each page so search engines connect them to the business.

---

## 5. Photography

Photographs are referenced by path. To add or change one, save your file into
`assets/img/` **using the exact filename**. No HTML or CSS changes, ever.

```
assets/img/barber-hero.png   ←  drop in a new barber-hero.png
```

Until a file exists, that frame shows a composed dark panel rather than a
broken-image icon, so the site looks finished at every stage.
`IMAGE_PROMPTS.md` lists every slot with a prompt, aspect ratio and export
size.

---

## 6. Logo and emblems

```
assets/img/logo.png        Full lockup — home hero, footer, favicon
assets/img/logo-mark.png   Emblem only — the header, where the full
                           lockup would be too small to read
assets/img/badge-hair.png      Category emblems, on the home service cards
assets/img/badge-barber.png
assets/img/badge-nails.png
assets/img/badge-skin.png      NOT supplied — drawn fallback until added
```

All are transparent PNGs so they sit cleanly on photography.

**Skin has no emblem yet**, so the site draws one in its place — a gold ring, a
sparkle cluster and the word SKIN in the site's own serif. Nothing looks
broken. Save a real one as `assets/img/badge-skin.png` and it takes over
automatically. `IMAGE_PROMPTS.md` has a prompt written to match the other
three. The same safety net covers all four emblems.

`logo-mark.png` was cropped from `logo.png`. If the logo is ever redrawn,
replace both.

---

## 7. Run it locally

```bash
python3 -m http.server 8000     # then open http://localhost:8000
```

Or `npx serve .`. Use a server rather than opening the file directly so the
map embed and fonts behave the same way they will in production.

---

## 8. Deploy to GitHub Pages

1. Create a repository and upload the contents of this folder to its **root** —
   `index.html` must sit at the top level, not inside a subfolder.
2. **Settings → Pages**.
3. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. Wait a minute, then open `https://YOUR-USERNAME.github.io/REPO-NAME/`.

Every push to `main` republishes the site. `.nojekyll` is included so files are
served exactly as they are.

**Custom domain:** add it under Settings → Pages → Custom domain and point your
DNS at GitHub, then update the sharing URLs (section 12).

---

## 9. Editing page copy

Headings and body copy live directly in the HTML — they are ordinary text, so
open the page and edit it. Two things are pulled from `services.js` instead, so
they stay in step with the menu:

- each service page's subtitle and intro (`tagline` and `intro` on the category)
- the group names listed on each home page service card

---

## 10. Structured data

Each page carries a `BeautySalon` JSON-LD block with the business name,
address, phone, area served and the four service categories.

It deliberately contains **no opening hours, no email, no ratings, no reviews
and no social profiles**, because none were supplied. Add them only when they
are real — invented hours in structured data will send people to a closed door.

---

## 11. Accessibility and performance

- Semantic landmarks, one `<h1>` per page, correct heading order
- Keyboard-operable menu with a visible focus ring and Escape to close
- `prefers-reduced-motion` respected throughout
- Tested 320 px to 1440 px with no horizontal scrolling
- Photographs below the fold are lazy-loaded; width and height are set on every
  image so nothing shifts as the page loads
- The map iframe is only created when the contact page needs it

---

## 12. Sharing links and the Open Graph image

The sharing tags use a placeholder domain. In all six HTML files, replace
`https://example.com` with the real address — the GitHub Pages URL or your
custom domain. It appears in:

- `<link rel="canonical">`
- `og:url` and `og:image`
- `twitter:image`
- `"url"`, `"image"` and `"logo"` in the JSON-LD block

One find-and-replace across the six files does it. Also update `siteUrl` in
`config.js`.

Then add `assets/img/og-image.png` at **1200 × 630**. Social platforms cache
previews hard, so run the page through Facebook's Sharing Debugger or
LinkedIn's Post Inspector afterwards to force a refresh.

---

## Before launch

- [ ] Square booking URL pasted into `config.js`
- [ ] Prices reviewed in `services.js`
- [ ] Durations added, or deliberately left off
- [ ] Instagram and Facebook URLs added, or left hidden
- [ ] Photographs added to `assets/img/`
- [ ] `badge-skin.png` generated and added
- [ ] `og-image.png` added at 1200 × 630
- [ ] `https://example.com` replaced across all six pages
- [ ] Address and phone checked in the JSON-LD blocks

---

## Structure

```
/
├── index.html  hair.html  barber.html  nails.html  skin.html  contact.html
├── README.md   IMAGE_PROMPTS.md   .nojekyll
└── assets/
    ├── css/styles.css        every style for the site
    ├── data/
    │   ├── config.js         business, contact and booking details
    │   └── services.js       every service and price
    ├── js/
    │   ├── services.js       builds the menus from the data
    │   └── main.js           navigation, links, reveals, image fallbacks
    └── img/                  logo, emblems and photography
```

`assets/data/` holds what you edit. `assets/js/` holds the code that reads it.
