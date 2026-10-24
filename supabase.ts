import { createClient } from "@supabase/supabase-js";
// Publishable key is safe in the browser ONLY because every table has RLS enabled.
// Never put a service_role / secret key or any AI key in this project.
export const sb = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);
