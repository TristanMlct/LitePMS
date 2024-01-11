import { supabase } from '$lib/supabaseClient'

const { data, error } = await supabase
  .from('properties')
  .select()

console.log(data, error)