"use client"

import { useEffect } from "react";
import { supabase } from "../../lib/helper/supabaseClient";

export default function Login() {

  const loginDefault = async() => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })
  }

  const loginWithGoogle = async() => {
    const { data, error } = await supabase.auth.signInWithSSO({
      domain: "google.com"
    })

    if (data?.url) {
      window.location.href = data.url
    }
  }

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)
  });

  useEffect(() => {
    const session = supabase.auth.getSession();
    console.log(session)
  }, [])

  return (
    <div>
      <button onClick={loginDefault}>Login</button>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  )
} 