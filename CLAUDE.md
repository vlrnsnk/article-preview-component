# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## AI Assistant Behavior

This project uses [AGENTS.md](./AGENTS.md) as the source of truth for AI assistant behavior and tone.

## Commands

### Development

- `npm run dev`: Start local development server (Vite).
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build locally.

### Quality & Linting

- `npm run lint:scss`: Check SCSS files for errors.
- `npm run lint:scss:fix`: Automatically fix many SCSS linting issues.
- `npm run lint:html`: Check HTML files for accessibility and syntax errors.
- `npm run lint:html:fix`: Automatically fix many HTML linting issues.
- `npm run format`: Format the entire codebase with Prettier.

### Assets

- `npm run images`: Run image optimization script (generates WebP/AVIF versions).

## Architecture & Structure

### Build System

The project uses [Vite](https://vitejs.dev/) as its development server and build tool, following a mobile-first responsive workflow.

### Styling Architecture

Styles are managed using SCSS with a modular `@use` architecture:

- `src/scss/abstracts/`: Foundational pieces like variables, functions, mixins, and placeholders.
- `src/scss/base/`: Core styles including resets, typography, and global utilities.
- `src/scss/components/`: Styles for individual UI components.
- `src/scss/layout/`: Layout rules and grid system.

This structure promotes reuse through mixins and variables defined in the `abstracts` folder.

### Asset Pipeline

Images are optimized using a custom script (`npm run images`) that utilizes Sharp to generate modern formats (WebP, AVIF) for better performance. These should be used via `<picture>` elements with appropriate fallbacks.

## Development Workflow

- **Pre-commit Hooks**: Uses `husky` and `lint-staged` to ensure code is formatted and linted before commits are made.
- **Styling Standard**: Follows a modular SCSS pattern. Always use `@use` instead of `@import`.
