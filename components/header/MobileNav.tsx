"use client"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { CgMenuRight } from "react-icons/cg"
import Link from "next/link"
import {motion} from 'framer-motion'

const menuVariants = {
  hidden:{
    x:'100%',

  },
  show:{
    x:0,
    transition:{
      easy:[0.6, 0.01, -0.05, 0.9]
    }
  }
}

function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="text-primary xl:hidden ">
      <div onClick={ () => setOpen(true)} className="text-3xl cursor-pointer ">
        <CgMenuRight />

      </div>
      <motion.div variants={menuVariants} initial='hidden' animate={open ? 'show' : '' } className="bg-white shadow-2xl w-3/4 absolute top-0 right-0 h-screen z-20">
        <div onClick={ () => setOpen(false)} className="text-4xl  absolute z-30 top-14 text-primary font-primary cursor-pointer"> <IoMdClose /> </div>

        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl  ">
          <li> <Link href='/' >Home</Link> </li> 
          <li> <Link href='/about' >About</Link> </li>
          <li> <Link href='/portfoglio' >Portfolio</Link> </li>
          <li> <Link href='/contact' >Contact</Link> </li>
        </ul>
      </motion.div>
    </nav>
  )
}

export default MobileNav