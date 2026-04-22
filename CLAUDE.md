@AGENTS.md

# UX Portfolio — Steven Burton

## Project Overview
Personal UX portfolio site for Steven Burton, a product designer at FamilySearch. Targets hiring managers at tech companies. The desired impression: "I want to work with this person."

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (dark mode only)
- Framer Motion (micro-interactions, scroll animations, page transitions)
- Deployed to Vercel

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint

## Architecture
- `/src/app/` — App Router pages and layouts
- `/src/components/` — reusable React components
- `/src/lib/` — utilities, data, types
- `/public/` — static assets

## Pages
- `/` — Home: interactive "build-together" hero → design manifesto → featured case studies
- `/work/[slug]` — Case studies: video-first (60s YouTube embed), condensed written summary
- `/about` — Bio, skills, contact

## Design Principles
- Dark mode only (light mode is a future iteration)
- Playful interactions distributed across every page, not isolated
- Warmth over wow — interactions make people smile, not say "cool tech"
- 30-second rule: hiring manager immediately gets what Steven does
- Show, don't label — no "vibe coded" headline; subtle "Designed & built with Claude" footer credit
- Notion/Figma-inspired aesthetic: friendly, slightly whimsical, warm neutrals + bold accent

## Content
- Case studies are video-first: 60-second horizontal YouTube videos from Simply UX channel
- Written content is condensed supporting summary, not full essays
- Placeholder content should feel intentional and scaffold future writing
