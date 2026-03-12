# Cardiac Amyloidosis Clinical Guide

Clinician-facing web application based on the **2023 ACC Expert Consensus Decision Pathway on Comprehensive Multidisciplinary Care for the Patient With Cardiac Amyloidosis** (Kittleson MM, Ruberg FL, et al. J Am Coll Cardiol. 2023;81:1076-1126).

## Features

- **Diagnosis** — Red flags, diagnostic algorithm, monoclonal protein screen, bone scintigraphy, echo/CMR, biopsy
- **Classification** — AL-CM vs ATTR-CM comparison, TTR variant table, staging systems (Mayo, UK, Boston)
- **Treatment** — Tafamidis, TTR silencers, AL-CM therapy (Dara-CyBorD), HF management, AF/arrhythmias, advanced HF
- **Specialist Collaboration** — Genetics, neurology, GI, hematology, nephrology, palliative care
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
