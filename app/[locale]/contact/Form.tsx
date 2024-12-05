import FormContainer from '@/components/image/FormContainer'
import { createBookingAction } from '@/utils/actions'
import React from 'react'


function Form() {
  return (
    <>

<FormContainer action={createBookingAction}>
  <div className="flex flex-col mb-10 justify-center items-center gap-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <input
        type="text"
        name='firstName'
        placeholder="First Name"
        required
        className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
      />
      <input
        type="text"
        name='lastName'
        placeholder="Last Name"
        required
        className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
      />
      <input
        type="text"
        name='phoneNumber'
        placeholder="Phone Number"
        required
        className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
      />
    </div>


  

   
    <button
      type="submit"
      className="py-[18px] px-[50px] h-[66px] w-56 flex items-center justify-center text-base uppercase font-semibold text-white bg-black"
    >
      Send
    </button>
  </div>
</FormContainer>

    
    </>
  )
}

export default Form