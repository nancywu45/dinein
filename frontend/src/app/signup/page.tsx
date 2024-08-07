"use client"

import Image from "next/image";
import { useEffect } from "react";
import { supabase } from "../../lib/helper/supabaseClient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import dineInLogo from "../../../public/dinein-logo.png"
import googleLogo from "../../../public/google_icon.svg"
import Link from "next/link";
import { useFormState } from "react-dom";
import { printTextAction } from "./actions";

export default function SignUp() {

  const [state, formAction] = useFormState(printTextAction, { errors: {}})

  const signUpDefault = async() => {
    const { data, error } = await supabase.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
      options: {
        data: {
          name: ''
        }
      }
    })
  }

  const signUpWithGoogle = async() => {
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
        <h2 className="font-bold text-2xl text-left pb-6">Sign up</h2>
        <form action={formAction} className="flex flex-col">
          <label htmlFor="email">Your email</label>
          <input name="email" type="text" className="bg-transparent border-b border-b-primary focus:border-primary" />
          <span className="text-destructive">{state.errors.email}</span>
          <label className="pt-4" htmlFor="name">Your name</label>
          <input name="name" type="text" className="bg-transparent border-b border-b-primary focus:border-primary" />
          <span className="text-destructive">{state.errors.name}</span>
          <label className="pt-4" htmlFor="password">Password</label>
          <input name="password" type="password" className="bg-transparent border-b border-b-primary focus:border-primary" />
          <span className="text-destructive">{state.errors.password}</span>
          <button className="py-2 px-10 m-6 bg-primary text-white rounded-full" onClick={signUpDefault}>Sign up</button>
        </form>
          <p className="pb-4">Or sign up with</p>
          <button onClick={signUpWithGoogle}>
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
          Already have an account?&nbsp;
          <Link href="/login" className="font-medium underline underline-offset-4">Sign in</Link>
        </p>
      </main>
    </MaxWidthWrapper>
  )
} 