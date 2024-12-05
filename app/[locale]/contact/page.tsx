import React from 'react'
import Woman from '@/public/img/contact/woman.png'
import Image from 'next/image';
import Form from './Form'
function ContactPage() {
  return (
    <section className='flex   min-h-screen  '>
      <div className=" mt-32 mx-auto flex flex-col md:flex-row   gap-x-8 text-center md:text-center">
        <div className="flex flex-col   md:flex-row     ">
         

         <div className="  lg:mr-80    ">
          <h1 className='h1 mb-12'>Contact me</h1>

<Form />

           </div>

           <div className="flex-1 pl-10  flex w-full  ">
            <Image
              src={Woman}
              alt="image"
              className="object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto  "
            />
      
        </div>

        </div>
      </div>
    </section>
  )
}

export default ContactPage