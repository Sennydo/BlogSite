import { createClient } from "@supabase/supabase-js";

const uri = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(uri, supabaseKey)