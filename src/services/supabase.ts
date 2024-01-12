import { supabaseKey } from "@/lib/constants";
import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const supabaseUrl = "https://dzypyxpbrupmlvqsxdmw.supabase.co";

export const supabaseClient = createBrowserClient(supabaseUrl, supabaseKey);

//For server actions and route handlers
export const supabaseServer = createServerClient(supabaseUrl, supabaseKey, {
  cookies: {
    get(name) {
      //Return cookie with the name 'name' here
      return cookies().get(name)?.value;
    },
    set(name, value, options) {
      //Set the cookies
      cookies().set(name, value, options);
    },
    remove(name, options) {
      //Delete the cookie
      cookies().set(name, "", options);
    },
  },
});
