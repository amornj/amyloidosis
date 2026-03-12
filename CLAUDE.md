# Cardiac Amyloidosis — Development Guide

## Project Overview
Clinician-facing Next.js app encoding the **2023 ACC Expert Consensus Decision Pathway on Comprehensive Multidisciplinary Care for the Patient With Cardiac Amyloidosis** (Kittleson MM, Ruberg FL, et al. J Am Coll Cardiol. 2023;81:1076-1126), enriched with advances from **The Last Decade in Cardiac Amyloidosis** (Fontana M, et al. JACC Cardiovasc Imaging. 2025;18:478-499).

## Tech Stack
- Next.js 14+ (App Router), TypeScript, Tailwind CSS
- Zustand + persist (localStorage) for state management
- react-markdown for AI chat rendering
- No database, no auth — client-side only, mobile-first

## Architecture

### Pages
| Route | Content |
|-------|---------|
| `/` | Home — amyloidosis overview, top 10 messages, 3-step pathway, section cards |
| `/diagnosis` | 6 tabs: red-flags, algorithm, monoclonal, scintigraphy, imaging, biopsy |
| `/classification` | 4 tabs: overview (AL vs ATTR), ttr-variants, staging, rare |
| `/treatment` | 7 tabs: attr-cm, al-cm, hf-management, af-arrhythmia, advanced-hf, clinical-trials, monitoring |
| `/specialists` | 6 tabs: genetics, neurology, gi, hematology, nephrology, palliative |
| `/calculator` | 2 tabs: T-Amylo ATTR-CA prediction (Arana-Achaga 2023), KCCQ-12 HF health status (Spertus 2015) |
| `/ask` | AI chat with NotebookLM proxy |

### Key Files
- `src/store/appStore.ts` — Zustand store with 5 tab states + resetAll
- `src/components/KCCQ12Calculator.tsx` — KCCQ-12 questionnaire, scoring, and interpretation
- `src/store/chatStore.ts` — Chat messages, mode, conversation tracking
- `src/components/Navigation.tsx` — Sidebar (desktop) / hamburger drawer (mobile)
- `src/app/api/notebooklm/route.ts` — Proxy to NotebookLM (notebook ID: ed0570ad-3df5-4652-b155-2e7494ceca8a)

## Commands
```bash
npm run dev    # Start development server
npm run build  # Production build
npm run start  # Start production server
```

## Environment Variables
```
NLM_PROXY_URL=<proxy endpoint, e.g. https://your-proxy.vercel.app>
NLM_PROXY_KEY=<api key for the proxy>
NLM_NOTEBOOK_ID=ed0570ad-3df5-4652-b155-2e7494ceca8a
```

## Design System
- Primary: #1a365d, Primary Light: #2a4a7f, Primary Dark: #0f2440
- Danger: #B22222, Success: #1E824C, Warning: #D4A017
- Badges: `badge-green`, `badge-yellow`, `badge-red`, `badge-blue`, `badge-purple`, `badge-teal`
- CSS utilities: `.card`, `.card-header`, `.btn-primary`, `.tab-btn`, `.input-field`, `.pathway-box`

## Deployment
- GitHub: https://github.com/amornj/amyloidosis.git
- Vercel: auto-deploy from main branch
- Required Vercel env vars: NLM_PROXY_URL, NLM_PROXY_KEY, NLM_NOTEBOOK_ID
