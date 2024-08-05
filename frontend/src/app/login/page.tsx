"use client"

import Image from "next/image";
import { useEffect } from "react";
import { supabase } from "../../lib/helper/supabaseClient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import dineInLogo from "../../../public/dinein-logo.png"
import googleLogo from "../../../public/google_icon.svg"

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
    <MaxWidthWrapper>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Image 
          className="mx-auto pb-16"
          src={dineInLogo.src} 
          alt="DineIn Logo Header"
          width={160}
          height={40}
          priority
        />
        <h2 className="font-semibold text-2xl text-left">Sign in</h2>
        <form action="POST" className="flex flex-col">
          <label htmlFor="">Your email</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="password" />
        </form>
        <button onClick={loginDefault}>Login</button>
        <p>Or sign in with</p>
        <button onClick={loginWithGoogle}>
          <Image 
            className=""
            src={googleLogo.src} 
            alt="Google Logo"
            width={36}
            height={36}
            priority
          />
        </button>
        <p>Don't have an account?</p>
        <button>Sign up</button>
      </main>
    </MaxWidthWrapper>
  )
} 