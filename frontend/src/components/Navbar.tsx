'use client'

import Link from "next/link"
import Image from "next/image";
import fridge from "../../public/fridge.svg"

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-24 w-full px-8 md:px-24 flex items-center">
      <div className="grow">
        <Link href="/" className="flex z-40 font-semibold text-3xl">
          <span className="text-primary">dine</span><span className="text-secondary">in</span><span className="text-primary">.</span>
        </Link>
      </div>
      <div>
        <Link href="/" className="flex z-40 text-xl">
          <span><Image src={fridge.src} alt="fridge-icon" width={32} height={32} /></span><span className="text-white pl-2">Kitchen</span>
        </Link>
      </div>
      <div>
        <Link href="/">
          <div className="ml-28 avatar rounded-full min-h-12 min-w-12 bg-gray-100"></div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar