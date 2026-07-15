# Frontend Mentor - {{PROJECT_NAME}} solution

This is a solution to the [{{CHALLENGE_NAME}} on Frontend Mentor]({{CHALLENGE_URL}}).
Frontend Mentor challenges help improve frontend skills by building realistic UI components.

## 🚀 Using this template

### 1. Create a new project

Click **"Use this template"** on GitHub and create a new repository.

### 2. Enable GitHub Pages deploy

After creating repo: Settings → Pages → Source → GitHub Actions.

### 3. Update project metadata

#### In `package.json`

```json
"name": "{{PROJECT_NAME}}"
```

### 4. Update Vite base path (for GitHub Pages)

```js
base: "/{{REPO_NAME}}/",
```

### 5. Update README

Replace all placeholders:

- {{PROJECT_NAME}}
- {{CHALLENGE_NAME}}
- {{CHALLENGE_URL}}
- {{SOLUTION_URL}}
- {{LIVE_URL}}

### 6. Update links

- Solution URL: {{SOLUTION_URL}}
- Live Site URL: {{LIVE_URL}}

### 7. Update dependencies (optional)

```bash
npx npm-check-updates -u
```

### 8. Update docs

Put design files and style guide in docs directory.

### 9. Update favicons

Upload favicons to public directory (realfavicongenerator.net is recommended).

### 10. Upload assets

Put fonts to `src/fonts/` and content images to `src/assets/images`.

### 11. Generate optimized image formats

After adding images, run:

```bash
npm run images
```

This generates optimized .webp and .avif versions recursively from:

```bash
src/assets/images/
```

The script:

- converts PNG/JPG/JPEG files to WebP and AVIF
- preserves the original files as fallbacks
- compresses images using Sharp
- skips already generated files

Run this whenever new images are added.

### 12. Update index.html

Change text content and meta tags values.

### 13. Add preview images

Upload `./preview.png` (894xHEIGHT size) and create `public/og-image.png` (1200x630) after the project is ready for ease of sharing.

## Table of contents

- [Overview](#overview)
  - [Preview](#screenshot)
  - [Links](#links)
- [Features](#features)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Setup](#setup)
  - [Installation](#installation)
  - [Image Optimization](#image-optimization)
  - [Development](#development)
  - [Build](#build)
  - [Linting](#linting)
- [Deployment](#deployment)
- [Performance](#performance)
- [Continued Development](#continued-development)
- [Useful Resources](#useful-resources)
- [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Notes](#notes)

## Overview

### The challenge

Users should be able to:

- {{CHALLENGE_REQUIREMENT_1}}
- {{CHALLENGE_REQUIREMENT_2}}

### Preview

<details>
  <summary>Click to expand website preview</summary>
  <br>
  <p align="center">
    <img src="./preview.png" alt="website preview" width="894" style="max-width: 100%; height: auto;">
  </p>
</details>

### Links

- Solution URL: [GitHub Repo]({{SOLUTION_URL}})
- Live Site URL: [Live Site]({{LIVE_URL}})

## Features

- Responsive mobile-first layout
- Accessible interactive states (`hover`, `focus-visible`)
- Semantic HTML structure
- Modular SCSS architecture using `@use`
- CSS custom properties for design tokens
- Stylelint configuration with property ordering
- Optimized production build with Vite
- Automated image optimization pipeline with Sharp (WebP + AVIF generation)
- Automated deployment to GitHub Pages via GitHub Actions

## My process

### Built with

- Semantic HTML5 markup
- SCSS (modular architecture: abstracts, base, components, layout)
- CSS custom properties (design tokens via SCSS variables)
- Flexbox / Grid
- Mobile-first workflow
- Vite
- Sharp image processing
- Stylelint (code quality + property ordering)
- HTML validation
- Husky (pre-commit hooks)

### What I learned

- {{LEARNING_1}}
- {{LEARNING_2}}
- {{LEARNING_3}}

## Setup

### Installation

```bash
npm install
```

### Image optimization

Generate modern image formats:

```bash
npm run images
```

This creates .webp and .avif versions of images inside:

```bash
src/assets/images/
```

Example:

```bash
image-hero.png
image-hero.webp
image-hero.avif
```

Use <picture> with AVIF → WebP → original fallback:

```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.png" alt="" />
</picture>
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint:scss
npm run lint:html
```

This project uses Stylelint + EditorConfig + Husky pre-commit hooks
to ensure consistent code formatting before commits.

### Fix linting issues:

```bash
npm run lint:scss:fix
npm run lint:html:fix
```

## Deployment

Project is built with Vite and deployed to GitHub Pages using GitHub Actions.

## Performance

Lighthouse score (example):

- Performance: {{PERF_SCORE}}
- Accessibility: {{ACCESSIBILITY_SCORE}}
- Best Practices: {{BEST_PRACTICES_SCORE}}
- SEO: {{SEO_SCORE}}

## Continued Development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Useful Resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)?
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)?
- What worked well? What didn't?

## Author

- Website: https://vlrnsnk.com
- Frontend Mentor: https://www.frontendmentor.io/profile/vlrnsnk
- GitHub: https://github.com/vlrnsnk

## Notes

- Accessibility-focused semantic markup
- Mobile-first responsive workflow
- Modular SCSS architecture using `@use`
- Consistent styling enforced with Stylelint
- Optimized Vite build pipeline
- GitHub Pages deployment with GitHub Actions
