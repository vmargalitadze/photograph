import React from 'react'

import MobileNav from './MobileNav'
import Logo from '@/public/img/header/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import Socials from '../socials/Socials'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
async function Header() {
  const session = await getServerSession(authOptions);

 
  
  return (
    <header className=' fixed w-full px-[30px] lg:px-[100px]  z-30 h-[100px] lg:h-[140px]  flex items-center' >
    <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between ">
      <Link href='/' className='max-w-[200px]' >
        <Image src={Logo} alt='logo' />
      </Link>
      <nav className="hidden xl:flex gap-x-12">
        <Link href='/' className='text-[#696c6d] hover:text-primary transition'>Home</Link>
        <Link href='/about' className='text-[#696c6d] hover:text-primary transition'>About</Link>
        <Link href='/portfoglio' className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
        <Link href='/contact' className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
        {session?.user && (
           <Link href='/admin' className='text-[#696c6d] hover:text-primary transition'>Admin page</Link>
          )}
      </nav>
    </div>
      <Socials />

      <MobileNav />
        </header>
  )
}

export default Header
