import { supabase } from "@/lib/supabase";

export async function signUp(email: string, password: string) {
  console.log("signUp called with:", email);

  const result = await supabase.auth.signUp({
    email,
    password,
  });

  console.log("signUp result:", result);

  return result;
}

export async function signIn(email: string, password: string) {
  console.log("signIn called with:", email);

  const result = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("signIn result:", result);

  return result;
}

export async function signOut() {
  return await supabase.auth.signOut();
}