import { SubmitButton } from '@/components/image/Buttons'
import FormContainer from '@/components/image/FormContainer'
import ImageInput from '@/components/image/ImageInput'
import { createPropertyAction } from '@/utils/actions'

import React from 'react'

function page() {
  return (
   <>
   <div className="flex items-center justify-center min-h-screen px-4">

   <FormContainer action={createPropertyAction}  >
  
    <ImageInput />
    <SubmitButton size='sm' text='upload image' className='mt-12'  />
   </FormContainer>

   </div>
   
   </>
  )
}

export default page