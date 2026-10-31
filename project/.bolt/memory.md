# Project memory

## Product intent & audience

- **KrishiMitra AI** — mobile-first agricultural AI web app for small and marginal farmers in India (Maharashtra focus).
- Helps farmers make better farming and financial decisions using ML (frontend-only; mock data, no backend/models).
- Audience has basic smartphone experience — UI must be simple, accessible, large touch targets.

## Brand personality & voice

- Trustworthy, practical, supportive, grounded in rural Indian farming life.
- Multi-lingual: Marathi (default), Hindi, English — language selector central to onboarding and persistent.

## Visual design & UX direction

- **Theme:** Premium dark forest-green. Light-mode toggle supported (full palette swap).
  - Background `#0B1511`, cards `#14231B`, primary green `#43B879`, accent lime `#B5E65A`.
  - Main text `#F3F7F3`, secondary text `#A6B5AA`. Subtle borders, soft shadows.
- Avoid excessive neon and gradients. Clean typography, large buttons.
- **Layout:** Mobile-first, centered phone-width container. Bottom navigation bar across main pages.
- **Components (reusable):** Button, Card, Badge, Progress, Input, Select, BottomSheet, Sparkline, SectionHeader, plus animation wrappers (PageTransition, AnimatedCard, AnimatedButton, etc.).
- **Persistence:** localStorage for farmer profile and language preference.
- **Icons:** lucide-react. **Path alias:** `@/` → `src/`.
- **Animation:** `motion/react` (Motion library) installed and wired throughout — premium, fluid, subtle style. Includes:
  - Page transitions (fade/slide), staggered dashboard card entrances, crop card hover/tap springs, animated count-up financial stats, shared-element nav indicator slide, animated weather/alert icons, expandable panels, loading skeletons, slow-drifting ambient background gradient.
  - All animations respect `prefers-reduced-motion`; optimized for mobile performance; no excessive bouncing/flashing.

## Decisions, constraints & rationale

- 7 pages built and routed in App.tsx: Welcome, Farmer Profile, Dashboard, Crop Recommendations, Financial Simulator, Market Prices & Weather Risks, Government Schemes & Action Plan.
- Mock data is realistic and localized: Maharashtra crops, markets (Latur, Nashik, etc.), real govt schemes (PM-KISAN, PMFBY, Soil Health Card, KUSUM).
- `TranslationKey` type exported from translations file to satisfy type checks.
- Animation upgrade completed without rebuilding app or changing routes/data — reused existing components, added Motion where needed.
- Two JSX syntax errors (stray `}}` in GovtSchemesPage and CropRecommendationsPage) fixed after animation refactor; build passes cleanly.
- Frontend only — no ML models or backend; all data mocked.

## Open questions & assumptions

- Light-mode palette values are inferred, not explicitly specified by user — may need refinement.
- No explicit data store beyond localStorage; future backend integration not yet designed.
- Accessibility standards (WCAG level) not explicitly defined beyond "accessible and easy."