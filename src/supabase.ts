import { createClient } from '@supabase/supabase-js';
// import assert from 'assert';

const { REACT_APP_SUPABASE_URL: supabaseUrl, REACT_APP_SUPABASE_KEY: supabaseKey } = process.env;

// assert(supabaseUrl, 'REACT_APP_SUPABASE_URL must be defined');
// assert(supabaseKey, 'REACT_APP_SUPABASE_KEY must be defined');

export const supabase = createClient(supabaseUrl!, supabaseKey!);
