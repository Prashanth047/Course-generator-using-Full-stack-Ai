"use client"

import React, { useState } from 'react'
import Sidbar from './_components/Sidbar'
import SidBar from './_components/SidBar'
import Header from './_components/Header'
import { UserCourseListContext } from '../_context/UserCourseListContext'


function DashboardLayout({children}) {

  const [userCourseList,setUserCourseList]=useState([]);

  return (

    <UserCourseListContext.Provider value={{userCourseList,setUserCourseList}}>
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
    </UserCourseListContext.Provider>
  )
}

export default DashboardLayout
