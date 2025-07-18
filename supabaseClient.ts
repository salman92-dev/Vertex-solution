

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zuxbimazfoyuikecuqtp.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY  // for Vite

if (!supabaseKey) {
  throw new Error('Missing Supabase Key');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
