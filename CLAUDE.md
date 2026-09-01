# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page personal portfolio site (React 19 + TypeScript + Vite + Tailwind CSS v4), deployed to GitHub Pages at `hamza.is-a.dev`.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — type-check (`tsc -b`) then production build via Vite
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run deploy` — publish `dist/` to GitHub Pages via `gh-pages`

There is no test suite configured in this repo.

## Architecture

The entire site is one page assembled in [src/App.tsx](src/App.tsx) as a fixed sequence of section components, each wrapped in `SectionReveal` (from [src/components/reveal.tsx](src/components/reveal.tsx)) for scroll-triggered 3D entrance animation. Sections live in `src/components/` (`hero`, `about`, `skills`, `projects`, `experience`, `education`, `github-stats`, `contact`, plus `navbar`/`footer`). `testimonials.tsx` exists but is currently commented out of `App.tsx`.

**Content is centralized, not scattered.** Nearly all copy, profile info, nav links, social links, skill lists, and structured section data live in [src/lib/data.ts](src/lib/data.ts) as typed exported constants (e.g. `PROFILE`, `SOCIALS`, `NAV_LINKS`, `SKILL_GROUPS`, `ABOUT_PARAGRAPHS`). When updating site content, edit this file rather than hardcoding strings inside components.

**Visual/interaction primitives** are shared across sections:
- `Reveal` / `SectionReveal` / `SectionIndicator` ([src/components/reveal.tsx](src/components/reveal.tsx)) — scroll-in animation wrappers built on `framer-motion`.
- `magnetic.tsx`, `tilt-card.tsx`, `cursor-dot.tsx`, `cursor-glow.tsx`, `particles.tsx`, `scramble-text.tsx`, `scroll-progress.tsx` — reusable motion/interaction effects used throughout the page.

**Styling**: Tailwind v4 configured via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — theme tokens are defined inline in [src/index.css](src/index.css) using `@theme inline` and CSS custom properties). The site is dark-themed only (`color-scheme: dark`), with a near-black background (`#09090B`) and amber (`#D97706`) as the accent color. Prefer using the existing CSS variables/theme tokens (`--color-*`) over introducing new hardcoded colors.

**Path alias**: `@/` maps to `src/` (configured in both [vite.config.ts](vite.config.ts) and `tsconfig.app.json`).

**GitHub stats**: `github-stats.tsx` pulls live data via `react-github-calendar` using `GITHUB_USERNAME` from `data.ts`.
