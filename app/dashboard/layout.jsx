import React from 'react'
import Sidbar from './_components/Sidbar'
import SidBar from './_components/SidBar'
import Header from './_components/Header'


function DashboardLayout({children}) {
  return (
    <div>
        <div className='md:w-64 hidden md:block'>
        <SidBar/>
        </div>
        
        <div className='md:ml-64 p-10'>
          <Header/>
          <div className='p-10'>
          {children}
          </div>
        
        </div>
      
    </div>
  )
}

export default DashboardLayout
