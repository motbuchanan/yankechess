# Yanke Bionics Chess — v1.5 · Sep 3 2026

Standalone PWA. Upload every file in this folder to the ROOT of its own GitHub repo, enable Pages (main / root), open the Pages URL on a phone and "Add to Home Screen".

Files:
- index.html            the whole app (engine, coach, learn lessons, themes)
- sw.js                 service worker (network-first, offline fallback). CACHE = yankechess-v1.5-sep3-2026
- manifest.webmanifest  install metadata (name "Yanke Bionics Chess", short name "Yanke Chess")
- logo.png              real Yanke logo, near-black flattened to #000000, 1400px wide
- icon192.png / icon512.png / iconmaskable512.png / favicon.png   Vitruvian mark cropped from the real logo on #000000

Every future edit: bump the badge in index.html (#ver + YC_VERSION) AND the CACHE string in sw.js, or installed phones will not update.

Gameplay, engine, coach, lessons, and on-device records are unchanged from Knight School (ks_* storage keys). All Game Shelf links and registrations removed.
