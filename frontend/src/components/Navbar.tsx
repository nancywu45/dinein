'use client'

import Link from "next/link"
import Image from "next/image";
import fridge from "../../public/fridge.svg"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {

  const navList = [
    {
      link: "/",
      text: "Kitchen",
      icon: fridge.src
    },
    // {
    //   link: "/",
    //   text: "Cookbook"
    // },
    // {
    //   link: "/",
    //   text: "Calendar"
    // },
  ]

  return (
    <nav className="sticky z-[100] h-24 w-full px-8 md:px-24 flex justify-between items-center">
      <div>
        <Link href="/" className="flex z-40 font-semibold text-3xl">
          <span className="text-primary">dine</span><span className="text-secondary">in</span><span className="text-primary">.</span>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-12">
        {navList.map((navItem: any, key: number) => (
          <Link href="/" className="flex z-40 text-xl" key={key}>
            <span><Image src={navItem.icon} alt={`${navItem.text}-icon`} width={32} height={32} /></span><span className="text-white pl-2">{navItem.text}</span>
          </Link>
      ))}
        <DropdownMenu className="ml-16">
          <DropdownMenuTrigger>
            <Link href="/">
              <div className="avatar rounded-full min-h-12 min-w-12 bg-gray-100"></div>
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}