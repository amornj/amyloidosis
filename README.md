# Cardiac Amyloidosis Clinical Guide

Clinician-facing web application based on the **2023 ACC Expert Consensus Decision Pathway on Comprehensive Multidisciplinary Care for the Patient With Cardiac Amyloidosis** (Kittleson MM, Ruberg FL, et al. J Am Coll Cardiol. 2023;81:1076-1126), enriched with advances from **The Last Decade in Cardiac Amyloidosis** (Fontana M, et al. JACC Cardiovasc Imaging. 2025;18:478-499).

## Features

- **Diagnosis** — Red flags, diagnostic algorithm, monoclonal protein screen, bone scintigraphy (incl. variant-specific false negatives, quantitative methods), advanced CMR multiparametric mapping, biopsy
- **Classification** — AL-CM vs ATTR-CM comparison, expanded TTR variant table (15 variants), staging systems (Mayo 2004, Mayo 2012, UK, Expanded NAC)
- **Treatment** — Tafamidis, acoramidis, gene silencers (patisiran, vutrisiran, eplontersen), CRISPR gene editing (NTLA-2001), anti-amyloid antibodies (NI006, PRX004, AT-02), AL-CM therapy, HF management, AF/arrhythmias, advanced HF, disease monitoring & response tracking
- **Specialist Collaboration** — Genetics, neurology, GI, hematology, nephrology, palliative care
- **Calculators** — T-Amylo ATTR-CA risk prediction (full logistic regression model + simplified T-AMYLO point score; Arana-Achaga et al. 2023) and KCCQ-12 heart failure health status assessment (4-domain + overall summary score; Spertus & Jones 2015)
- **Ask NotebookLM** — AI-powered Q&A on the full ECDP guideline

## Tech Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Zustand · react-markdown

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

For the Ask NotebookLM feature:

```
NLM_PROXY_URL=<proxy endpoint>
NLM_PROXY_KEY=<api key>
NLM_NOTEBOOK_ID=ed0570ad-3df5-4652-b155-2e7494ceca8a
```

## Vercel Deployment

Set the following environment variables in Vercel project settings:

| Variable | Description |
|----------|-------------|
| `NLM_PROXY_URL` | URL of the NotebookLM proxy server (e.g., `https://your-nlm-proxy.vercel.app`) |
| `NLM_PROXY_KEY` | API key for authenticating with the proxy |
| `NLM_NOTEBOOK_ID` | `ed0570ad-3df5-4652-b155-2e7494ceca8a` (the amyloidosis notebook) |

## Disclaimer

This tool is for educational and clinical reference purposes only. It does not replace clinical judgment. Always verify recommendations against the full guideline and local protocols.
