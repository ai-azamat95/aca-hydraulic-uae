# ACA Hydraulic UAE — Premium Landing Page

Premium one-page website for expert on-site hydraulic diagnostics and heavy equipment field service in UAE.

## Core positioning
ACA Hydraulic UAE provides expert on-site hydraulic diagnostics for heavy equipment in Dubai and across UAE.

**Important pricing message:**
- Expert Hydraulic Diagnostics: from $1000
- Travel / Site Visit Fee: charged separately
- Repair works and parts: quoted separately after diagnostics

## Stack
- Vite
- React
- CSS
- lucide-react icons
- GitHub Pages workflow included

## Files
- `src/main.jsx` — React landing page
- `src/styles.css` — full premium industrial design
- `public/assets/design-reference.png` — generated design reference mockup
- `docs/ai-whatsapp-agent-prompt.md` — prompt for WhatsApp / website chat agent
- `docs/google-ads-setup.md` — first Google Ads structure
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## Local launch
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## GitHub Pages deployment
1. Create a repository, for example `aca-hydraulic-uae`.
2. Upload these files to the repository.
3. In GitHub: Settings → Pages → Build and deployment → GitHub Actions.
4. Push to `main`.
5. The included workflow builds and deploys the site.

## What to change before real launch
1. Replace `WHATSAPP_NUMBER` in `src/main.jsx` with the real UAE WhatsApp number.
2. Replace `+971 50 123 4567` with the real phone number.
3. Connect the form to Formspree, Make.com, Zapier, Google Sheet, HubSpot or your own backend.
4. Add Google Tag Manager and Google Ads conversion tracking in `index.html`.
5. Replace synthetic visual blocks with real ACA Hydraulic field photos/videos when available.
6. Add real company address/license details when the UAE legal structure is ready.

## Recommended domain
- acahydraulicuae.com
- acahydraulicdubai.com
- acafieldservice.com
- acahydraulic.ae if available
