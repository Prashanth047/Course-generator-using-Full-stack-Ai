"use client"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React, { useContext } from 'react'

function AddCourse() {
    const {user}=useUser();

    const {userCourseList,setUserCourseList}=useContext(UserCourseListContext);{/**delete this to undo subscription */}

  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='text-2xl'>Hello,
            <span className='font-bold'>{user?.fullName}</span>
        </h2>
        <p className='text-sm text-gray-500'>
            Create new Courses with AI
        </p>
      </div>
      <Link href={userCourseList>=5? 'dashboard/upgrade':'/create-course'}> {/**delete that condition and keep only create-course route to undo subscription */}
      <Button>+ Create AI Course</Button>
      </Link>
    </div>
  )
}

export default AddCourse
