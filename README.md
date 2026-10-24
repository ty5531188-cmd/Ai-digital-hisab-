# AI Small Business Hisab (login + real data)

## Run
    npm install
    npm run dev

## Supabase (Dashboard -> Authentication -> URL Configuration)
Add your live site address as Site URL and Redirect URL (also http://localhost:5173).

## Netlify
Build command `npm run build`, publish directory `dist`.
Env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`.

## Limits
Totals read the latest 1000 rows. No suppliers, export, charts, or AI yet. Not test-built offline: run `npm run build` once.
Never add a service_role key or AI key to this project.
