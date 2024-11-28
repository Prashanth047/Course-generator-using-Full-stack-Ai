import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-md bg-gray-900'>
      <Image src={'/mainlogo.svg'} width={200} height={200} alt={'this is logo'} className='rounded-full'/>
      
    </div>
  )
}

export default Header
