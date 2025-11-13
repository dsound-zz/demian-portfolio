# Project Screenshots

Add your project preview images here. The code is already set up to use these images once you add them.

## Required Images

Add screenshots with these exact filenames:

- `avandar-preview.jpg` (or .png, .webp)
- `vigil-preview.jpg`
- `music-portfolio-preview.jpg`
- `climate-response-preview.jpg`
- `faunagram-preview.jpg`

## Recommended Specs

- **Size**: 1200x800px (3:2 aspect ratio)
- **Format**: JPG (for photos) or PNG (for UI screenshots)
- **Quality**: Optimize for web (aim for < 200KB per image)

## How to Add Screenshots

1. Take screenshots of your deployed apps
2. Save them with the exact filenames listed above
3. Place them in this folder (`src/assets/projects/`)
4. Uncomment the import statements in `src/components/Projects.tsx`
5. Replace the placeholder URLs with the imported variables

Example:
```typescript
// In Projects.tsx, uncomment:
import vigilPreview from "../assets/projects/vigil-preview.jpg";

// Then replace:
image: "https://...", // Replace with: vigilPreview
// With:
image: vigilPreview,
```

## Taking Screenshots

You can use:
- Browser DevTools (Chrome/Firefox) - Device toolbar + Screenshot
- Browser extensions (Full Page Screen Capture, etc.)
- macOS: Cmd+Shift+4 for selection, or use Screenshot app
- Online tools: ScreenshotAPI, urlbox.io (paid services)

