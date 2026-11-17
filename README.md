# O'Neills on Wheels — website

Live at **https://oneillsonwheels.net** (hosted free on GitHub Pages from this repo's `main` branch).

A single-page static site: `index.html`, `styles.css`, `script.js`, and `menu.js`. There is no build step.

## Weekly updates: edit `menu.js` only

You can edit right on GitHub: open `menu.js`, click the pencil icon, make your change, then click **Commit changes**. The live site updates in a minute or two.

### Add your Facebook page
Paste your page link between the quotes:

```js
facebookUrl: "https://www.facebook.com/your-page-name",
```

While it's empty, "Facebook" shows as plain text and the Facebook buttons stay hidden. Once it's filled in, every Facebook mention becomes a link.

### Change the menu list
Edit the `quests` list. Add, remove, or reorder lines. Keep the quotes and the comma at the end of each line:

```js
quests: [
  "Soups",
  "Quiche",
  "Crawfish Étouffée",
],
```

### Add a week label (optional)
```js
weekLabel: "Week of November 23",
```
Set it back to `""` to hide it.

### Add your farmers market details
The site already says you're at the farmers market every Tuesday. To add the market's name, hours, or location, fill in any of these (leave a line as `""` to hide it):

```js
market: {
  name: "Your Market Name",
  when: "Tuesdays, 3 PM – 6 PM",
  where: "Street or park, Lake Charles",
},
```

## Phone, email, and other text
Phone (337) 515-6767 and oneillsllc@gmail.com are in `index.html` (search for `tel:` and `mailto:`). The street address is intentionally not published.

## Files
- `assets/img/logo.png` / `logo.webp` — the glowing d20 logo; `favicon*`, `apple-touch-icon.png`, `icon-512.png` are made from it.
- `assets/img/frame.png`, `knot.png`, `banner.png`, `texture.jpg` — Celtic frame, knot, and "Adventurers Eat Here" banner from the business card.
- `assets/img/og-image.jpg` — preview image shown when the link is shared.
- `CNAME` — tells GitHub Pages to serve the site at oneillsonwheels.net. Don't delete it.
