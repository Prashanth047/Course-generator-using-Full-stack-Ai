import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-md'>
      <Image src={'/logo.svg'} width={200} height={200} alt={'this is logo'}/>
      <Button>Get started</Button>
    </div>
  )
}

export default Header
