import React from 'react'
import { ImFacebook, ImInstagram } from 'react-icons/im'
import Link from 'next/link'
function Socials() {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
    <li> <Link href='#' target='_blank'> <ImFacebook/> </Link> </li>
    <li> <Link href='#' target='_blank'> <ImInstagram/> </Link> </li>
      </ul>
    </div>
  )
}

export default Socials