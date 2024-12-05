import React from 'react'
import f from '@/public/img/portfolio/1.png'
import s from '@/public/img/portfolio/2.png'
import t from '@/public/img/portfolio/3.png'
import ff from '@/public/img/portfolio/4.png'

import Image from 'next/image'
import Link from 'next/link'
function PortfoglioPage() {
  return (
    <section className="section">
    <div className="container mx-auto h-full relative">
      <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
       
        <div className="">
          <h1 className="h1">Portfolio</h1>
          <Link href='/all' className='py-[18px] px-[50px] h-[66px] w-56 flex items-center justify-center text-base uppercase  font-semibold  text-white bg-black'> View All  </Link>
        </div>
  
       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
     
        <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
          <Image
            className="object-cover h-full hover:scale-110 transition-all duration-500"
            src={f}
            alt="first"
          />
        </div>

       
        <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
          <Image
            className="object-cover h-full hover:scale-110 transition-all duration-500"
            src={s}
            alt="second"
          />
        </div>

       
        <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
          <Image
            className="object-cover h-full hover:scale-110 transition-all duration-500"
            src={t}
            alt="third"
          />
        </div>

       
        <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
          <Image
            className="object-cover h-full hover:scale-110 transition-all duration-500"
            src={ff}
            alt="fourth"
          />
        </div>
      </div>
      </div>
    </div>
  </section>
  
  )
}

export default PortfoglioPage