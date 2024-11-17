import React from 'react'
import Sidebar from './_components/Sidebar'
import SidBar from './_components/SidBar'


function DashboardLayout({children}) {
  return (
    <div>
        <div className='md:w-64 hidden md:block'>
        <SidBar/>
        </div>
        
        <div className='md:ml-64 p-10'>
        {children}
        </div>
      
    </div>
  )
}

export default DashboardLayout
