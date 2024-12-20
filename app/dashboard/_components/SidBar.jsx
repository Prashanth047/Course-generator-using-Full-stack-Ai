"use client"

import React from 'react'
import Image from 'next/image'
import { HiHome } from "react-icons/hi2";
import { HiSearchCircle } from "react-icons/hi";
import { HiCurrencyRupee } from "react-icons/hi2";
import { HiMiniPower } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';


function SidBar() {

    const Menu=[
        {
            id:'1',
            name:"Home",
            icon:<HiHome />,
            path:"/dashboard"

        },
        {
            id:'2',
            name:"Explore",
            icon:<HiSearchCircle/>,
            path:"/dashboard/explore"

        },
        {
            id:'3',
            name:"Upgrade",
            icon:<HiCurrencyRupee/>,
            path:"/dashboard/upgrade"

        },
        {
            id:'4',
            name:"Logout",
            icon:<HiMiniPower/>,
            path:"/dashboard/logout"

        }

    ];
    const path=usePathname();

  return (
    
      <div className='fixed h-full md:w-64 p-5 shadow-md'>
      <Image src={'/logo.svg'} width={160} height={100} alt="iamge"/>
      <hr className='my-5'></hr>

            <ul>
                {Menu.map((item, index) => (
                    <Link  key={index} href={item.path}>
            <div className={`flex items-center gap-2 p-3 text-gray-600 cursor-pointer
             hover:bg-gray-100 hover:text-black rounded-lg mb-2
             ${item.path==path && 'bg-gray-100 text-black'}`}>
            <div className="text-2xl">{item.icon}</div>
            <h2>{item.name}</h2>
            </div>
            </Link>
                ))}
            </ul>

            <div className='absolute bottom-10 w-[80%]'>
            <Progress value={33} />
            <h2 className='text-sm my-2'>3 out of 5 courses</h2>
            <h2 className='text-xs text-gray-500'>Upgrade plan</h2>

            </div>
    </div>
    
  )
}

export default SidBar
