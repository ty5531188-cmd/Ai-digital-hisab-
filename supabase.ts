import { createClient } from "@supabase/supabase-js";
// Publishable key + URL are public by design (safe in the browser ONLY because every table has RLS).
// Env vars override these defaults; the defaults mean a missing .env can no longer blank the site.
// Never put a service_role / secret key or any AI key in this project.
const url = import.meta.env.VITE_SUPABASE_URL || "https://okwmgmtybzkrediesojs.supabase.co";
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_ozxApnOgQSsQ6PhnOoX7vA_IMmoxWji";
export const sb = createClient(url, key);
