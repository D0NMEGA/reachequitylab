# REACH Equity Lab Website

Multi-page static website scaffold with separate pages for:

- Home (`index.html`)
- About Us (`about.html`)
- Team (`team.html`)
- Publications (`publications.html`)
- Events (`events.html`)
- Contact (`contact.html`)
- Contact Us form (`contact-us.html`)

## Features

- Smooth section reveal animations while scrolling
- Smooth transition animation when switching pages/tabs
- Team headshot hover overlay with clickable LinkedIn icon
- `/public/...` image paths ready for production-style linking

## Add your images

- Main logos:
	- `/public/reach-banner.png`
	- `/public/reach-icon.jpg`
- Team headshots:
	- `/public/headshots/team/alex-johnson.png`
	- `/public/headshots/team/sam-rivera.png`
	- `/public/headshots/team/taylor-lee.png`
	- `/public/headshots/team/jordan-smith.png`

Missing images automatically fall back to placeholder SVGs.

## Update links

Replace placeholder links in HTML files:

- Team LinkedIn URLs in `team.html`
- Social links in footer and `contact-us.html`
- Publication PDF/citation URLs in `publications.html`

## Run locally

Use any static server, for example:

```powershell
python -m http.server 5500
```

Then open:

`http://localhost:5500`