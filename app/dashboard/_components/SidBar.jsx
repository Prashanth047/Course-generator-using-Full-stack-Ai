import React from 'react'
import Image from 'next/image'
import { HiHome } from "react-icons/hi2";
import { HiSearchCircle } from "react-icons/hi";
import { HiCurrencyRupee } from "react-icons/hi2";
import { HiMiniPower } from "react-icons/hi2";

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

  return (
    
      <div className='fixed h-full md:w-64 p-5 shadow-md'>
      <Image src={'/globe.svg'} width={160} height={100} alt="iamge"/>
      <hr className='my-5'></hr>

            <ul>
                {Menu.map((item, index) => (
            <div className='flex items-center gap-2 p-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg'>
            <div className="text-2xl">{item.icon}</div>
            <h2>{item.name}</h2>
            </div>
                ))}
            </ul>
    </div>
    
  )
}

export default SidBar
