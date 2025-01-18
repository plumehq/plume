import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  // Extract search parameters and origin from the request URL
  const { searchParams, origin } = new URL(request.url);

  // Get the authorization code and the 'next' redirect path
  const code = searchParams.get("code");
  // Get the action type from the URL params
  const action = searchParams.get("action") ?? "sign-in";
  const next = searchParams.get("next") ?? "/";

  if (code) {
    // Create a Supabase client
    const supabase = createClient();

    // Exchange the code for a session
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Check if this is the user's first sign in
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const isNewUser = user?.created_at === user?.last_sign_in_at;

      if (action === "sign-up" && isNewUser) {
        // For new users signing up, redirect to onboarding
        return NextResponse.redirect(`${origin}${next}`);
      } else {
        // For returning users or direct sign-ins, go to dashboard
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // If there's no code or an error occurred, redirect to an error page
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
