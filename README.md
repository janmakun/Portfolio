# John Mark Manlapaz — Portfolio

A modernized, dark-blue themed developer portfolio built with React, React Router, and Framer Motion — restructured from the classic Soumyajit4419/Portfolio layout with a calmer "GitHub × Vercel × Linear" visual language.

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

- `src/pages/Home.jsx` — Hero + highlights strip
- `src/components/About` — About + embedded Skills grid
- `src/components/Projects` — Project cards (GitHub / Live Demo links)
- `src/components/Resume` — Interactive resume with timeline + Download Resume button
- `src/components/Contact` — Contact form + socials
- `src/components/Layout` — Aurora background, scroll-reveal, page transitions
- `src/data` — Editable content (skills, projects, resume)
- `public/resume.pdf` — Downloadable resume (regenerate via a PDF tool if content changes)

## Customizing

- **Colors/fonts:** edit CSS variables in `src/index.css`
- **Content:** edit files in `src/data/`
- **Social links:** update placeholder URLs in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`
- **Resume PDF:** replace `public/resume.pdf` with your own file (same filename), used by the Download Resume buttons.

## Tech

React 19 · React Router 7 · Framer Motion · react-icons · Vite
