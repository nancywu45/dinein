"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

import { supabase } from "../../lib/helper/supabaseClient";

import MaxWidthWrapper from "@/components/MaxWidthWrapper"

import dineInLogo from "../../../public/dinein-logo.png"
import googleLogo from "../../../public/google_icon.svg"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(6),
  passwordConfirm: z.string()
}).refine((data) => {
  return data.password === data.passwordConfirm
}, {
  message: "Passwords do not match",
  path: ["passwordConfirm"]
})

export default function SignUp() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  })

  const signUpDefault = async (values: z.infer<typeof formSchema>) => {
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          name: values.name
        }
      }
    })

    console.log(data)
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
      <main className="flex min-h-screen flex-col justify-center">
        <Image 
          className="mx-auto pb-16"
          src={dineInLogo.src} 
          alt="DineIn Logo Header"
          width={160}
          height={40}
          priority
        />
        <h2 className="font-bold text-2xl text-left pb-6">Sign up</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(signUpDefault)} className="flex flex-col max-w-full gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Your email</FormLabel>
                  <FormControl className="bg-transparent border-b border-b-primary rounded-none active:rounded-lg focus:rounded-lg">
                    <Input type="text" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Your name</FormLabel>
                  <FormControl className="bg-transparent border-b border-b-primary rounded-none active:rounded-lg focus:rounded-lg">
                    <Input type="text" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl className="bg-transparent border-b border-b-primary rounded-none active:rounded-lg focus:rounded-lg">
                    <Input type="password" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl className="bg-transparent border-b border-b-primary rounded-none active:rounded-lg focus:rounded-lg">
                    <Input type="password" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
            <div className="text-center">
              <Button type="submit" className="text-white m-4 w-64 items-center rounded-full hover:text-primary hover:border hover:border-primary">Sign up</Button>
            </div>
          </form>
        </Form>
          <p className="pb-4 text-center">Or sign up with</p>
          <button className="w-full" onClick={signUpWithGoogle}>
            <Image 
              className="mx-auto"
              src={googleLogo.src} 
              alt="Google Logo"
              width={36}
              height={36}
              priority
            />
          </button>
        <p className="pt-12 text-center">
          Already have an account?&nbsp;
          <Link href="/login" className="font-medium underline underline-offset-4">Sign in</Link>
        </p>
      </main>
    </MaxWidthWrapper>
  )
} 