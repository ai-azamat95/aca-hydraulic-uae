# Instructions for Codex / website assistant: place generated images correctly

Use the provided generated images as real website assets, not just as loose files.

## Assets included

Full mockups:
- `public/assets/mockups/aca-hydraulic-uae-reference-main.png`
- `public/assets/mockups/aca-hydraulic-uae-reference-secondary.png`

Cropped/optimized website images derived from the approved mockup:
- `public/assets/hero-field-diagnostics.jpg`
- `public/assets/customer-1.jpg`
- `public/assets/customer-2.jpg`
- `public/assets/customer-3.jpg`
- `public/assets/customer-4.jpg`
- `public/assets/case-1.jpg`
- `public/assets/case-2.jpg`
- `public/assets/case-3.jpg`
- `public/assets/pricing-reference.jpg`

## Main requirements

1. Do not use only abstract CSS shapes in the hero section.
2. Use `hero-field-diagnostics.jpg` as the main hero visual on the right side.
3. Use `customer-1.jpg` to `customer-4.jpg` inside the customer/service cards.
4. Use `case-1.jpg` to `case-3.jpg` inside the case-study cards.
5. Add a visual reference section with the full mockup image so the approved design is visible and preserved inside the site.
6. Keep the premium dark navy / graphite / construction-gold design system.
7. Keep this price wording visible in the hero and contact areas:
   `Diagnostics from $1000. Travel charged separately.`
8. In pricing, clearly show:
   - Expert Hydraulic Diagnostics — from $1000
   - Travel / Site Visit Fee — charged separately
   - Diagnostic fee and travel fee are separate charges.
   - Repair works and parts quoted separately after diagnostics.

## Important deployment note

This project uses Vite and includes `vite.config.js` with:

```js
base: './'
```

Do not remove this for GitHub Pages. It helps image paths work correctly when the site is hosted under a GitHub Pages subfolder.
