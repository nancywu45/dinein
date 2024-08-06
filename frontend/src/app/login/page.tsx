"use client"

import Image from "next/image";
import { useEffect } from "react";
import { supabase } from "../../lib/helper/supabaseClient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import dineInLogo from "../../../public/dinein-logo.png"
import googleLogo from "../../../public/google_icon.svg"
import Link from "next/link";

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
        <h2 className="font-bold text-2xl pb-6">Sign in</h2>
        <form action="POST" className="flex flex-col">
          <label htmlFor="">Your email</label>
          <input className="bg-transparent border-b border-b-primary focus:border-primary" type="text" />
          <label className="pt-4" htmlFor="">Password</label>
          <input className="bg-transparent border-b border-b-primary active:border-primary" type="password" />
        </form>
        <button className="py-2 px-10 m-6 bg-primary text-white rounded-full" onClick={loginDefault}>Sign in</button>
        <p className="pb-4">Or sign in with</p>
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
        <p className="pt-12">
          Don't have an account?&nbsp;
          <Link href="/signup" className="font-medium underline underline-offset-4">Sign up</Link>
        </p>
      </main>
    </MaxWidthWrapper>
  )
} 