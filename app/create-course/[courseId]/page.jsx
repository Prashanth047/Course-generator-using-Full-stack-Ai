"use client"

import React, { useEffect } from 'react'

function CourseLayout({params}) {

  useEffect(()=>{
    console.log(params)
  },[params])
  const GetCourse=()=>{

  }
  return (
    <div>
      CourseLayout
    </div>
  )
}

export default CourseLayout
