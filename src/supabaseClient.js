import { createClient } from '@supabase/supabase-js'
 
// Vite reads these from .env.local when the dev server starts
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
 
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase settings. Check .env.local, then restart npm run dev.')
}
 
// One shared client for the whole app. Other files import this.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

