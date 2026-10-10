import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Production pages are prerendered (scripts/prerender.mjs) so crawlers and the initial HTML response
// already contain full content, correct meta tags and JSON-LD — that's what fixes the SEO/AI-crawler
// issue. The client still does a full client-side render on top of that (not React 18 hydration):
// Framer Motion drives this app's `initial`/`animate`/`whileInView` props with direct DOM style
// mutations that aren't SSR-aware, so the prerendered markup reflects each element's *settled*
// animation state, not the pre-animation state a hydration pass expects to find — hydrating onto it
// produced a hydration-mismatch error on every single page. A plain client render avoids that; the
// trade-off is a brief swap from the prerendered markup to the live app on first paint, same as any
// prerendering setup without full SSR (e.g. react-snap's default mode).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
