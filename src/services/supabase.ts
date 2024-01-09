import { supabaseKey } from '@/lib/constants';
import {createBrowserClient} from '@supabase/ssr'

export const supabaseUrl = "https://dzypyxpbrupmlvqsxdmw.supabase.co";
export const supabase = createBrowserClient(supabaseUrl, supabaseKey)