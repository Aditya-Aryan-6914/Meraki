
  # Cultural Committee Website

  Sanskruti cultural committee landing page built with Vite + React + Tailwind v4.

  ## Local development
  - Install dependencies: `npm install`
  - Start dev server: `npm run dev`
  - Preview production build: `npm run preview` (after `npm run build`)

  ## Deployment (GitHub Pages)
  - Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
  - The workflow sets `VITE_BASE=/Meraki/` so assets load correctly on `https://aditya-aryan-6914.github.io/Meraki/`.
  - For a custom domain, update the `VITE_BASE` value (or set it to `/`) in the workflow.
  