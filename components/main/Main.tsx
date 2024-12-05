import React from 'react'
import Woman from '@/public/img/home/woman.png'
import Image from 'next/image'
import Link from 'next/link'
function Main() {
  return (
    <section className='section '>
<div className="container mx-auto h-full relative flex flex-col  lg:flex-row items-center lg:items-start">
  {/* Text Section */}
  <div className="w-full lg:w-1/2 pt-36 pb-14 lg:pt-[180px] lg:pl-36 lg:pb-0 z-10 flex flex-col items-center gap-10  lg:items-start justify-center">
    <h1 className="h1 text-center flex gap-10 lg:text-left">
      Photographer <br   /> & Video Maker
    </h1>
   
    <Link href="/contact" className="py-[18px] px-[50px] h-[66px] w-56 flex items-center justify-center text-base uppercase  font-semibold  text-white bg-black">
      Contact Me
    </Link>
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end max-h-96 lg:max-h-full">
    <div className="relative overflow-hidden lg:right-10">
      <Image src={Woman} alt="woman" className="max-w-full h-auto" />
    </div>
  </div>
</div>

    </section>
  )
}

export default Main