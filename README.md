# Michel Zeller Gallery

A responsive React gallery app built with Vite, React Router, and Bootstrap 5. The project presents the Michel Zeller collection with a modern single-page architecture and live artwork data pulled from the Metropolitan Museum of Art API.

## Project overview

This project is an art gallery website focused on showcasing paintings and press materials in a clean editorial layout. It includes:

- a homepage with hero content and selected artwork highlights
- an artist biography page
- a gallery page with multiple artwork cards
- a nested artwork detail route
- a press gallery section
- a contact form with client-side validation
- image optimization using WebP assets from the `public/images/optimized/` folder

## Requirements

- Node.js 18+ recommended
- npm or another package manager
- a modern browser

## Tech stack

- React 19
- Vite
- React Router
- Bootstrap 5
- Axios for API requests
- ESLint for code quality checks

## Project checklist

This project satisfies the required criteria:

1. React framework: Yes
2. UI library: Bootstrap 5 is used throughout the app
3. Routing: Yes, via `react-router-dom`
4. Responsive design: Yes, the layout adapts across mobile, tablet, and desktop viewports
5. Full documentation: Yes, this README documents the project setup and structure
6. Screenshots: Required screenshot folder is prepared; actual page screenshots should be captured before final handoff
7. Project idea: Artistic gallery / portfolio app, not limited to e-commerce

## Installation

From the project root:

```bash
npm install
npm run dev
```

Then open the local Vite URL in the browser, usually:

```text
http://localhost:5173
```

### Useful scripts

```bash
npm run build
npm run preview
npm run lint
npm run optimize:images
```

## App routes

| Route | Page | Description |
| --- | --- | --- |
| `/` | Home | Landing page and selected artwork highlights |
| `/about` | About | Artist story and gallery context |
| `/buy` | Gallery | Grid of artwork cards |
| `/buy/:paint` | Artwork detail | Individual item detail view |
| `/press` | Press | Press archive and image presentation |
| `/contact` | Contact | Inquiry form |
| `*` | Not Found | Fallback route |

## Main project structure

```text
src/
  App.jsx
  main.jsx
  gallery.css
  index.css
  components/
    Footer/
    Gallery/
    HeroSection/
    Layout/
    NavBar/
    Pages/
    Section/
    Ui/
  data/
    galleryData.jsx
public/
  images/
  fonts/
  favicon.svg
scripts/
  optimize-images.mjs
README.md
```

## Data and content flow

The gallery data is currently served from the Metropolitan Museum of Art API using Axios. The logic is centralized in:

- `src/data/galleryData.jsx`

This module handles:

- search for artwork IDs
- fetch of object details
- normalization of API records
- image validation
- consistent artwork object formatting for UI components

## UI and design notes

- Bootstrap grid and components are used for layout consistency
- the app uses a warm editorial palette inspired by the gallery identity
- the layout is designed for responsiveness across common breakpoints
- optimized WebP image assets are stored under `public/images/optimized/`

## Screenshot requirement

The project should include a screenshot folder with one image per major page in the app, for example:

```text
docs/screenshots/
  home.png
  about.png
  gallery.png
  artwork-detail.png
  press.png
  contact.png
```

These screenshots should be captured after the app is running locally and then committed to the repository to support project presentation and deployment review.

## Deployment guide

### Vercel

1. Push the project to GitHub
2. Sign in to Vercel
3. Import the repository
4. Select the app root folder
5. Keep the default framework settings for Vite
6. Deploy the app

For a static site deploy, Vercel will build the project using the `npm run build` command and serve the generated `dist/` output.

### Local production preview

```bash
npm run build
npm run preview
```

## Notes for final submission

Before submitting the project for evaluation, confirm the following:

- app is running without runtime errors
- all pages render correctly
- layout remains responsive on mobile and desktop
- documentation is complete and matches the actual project state
- screenshot files exist in the repository
- project can be deployed on Vercel or another hosting platform

## Final status

The project is functionally aligned with the required React + Bootstrap + routing approach and is close to final submission readiness. The remaining required step before final delivery is to capture the screenshot set and complete external deployment verification.
"# Michel-Zeller" 
"# Michel-Zeller" 
