import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-md'>
      <Image src={'/globe.svg'} width={100} height={100} alt={'this is logo'}/>
      <Button>Get started</Button>
    </div>
  )
}

export default Header
