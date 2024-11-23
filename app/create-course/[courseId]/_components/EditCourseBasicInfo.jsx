import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { HiMiniPencilSquare } from "react-icons/hi2";  
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { asc, eq } from 'drizzle-orm';



function EditCourseBasicInfo({course,refreshData}) {

    const [name,setName]=useState();
    const [description,setDescription]=useState();

    useEffect(()=>{
        setName(course?.courseOutput?.courseName);
        setDescription(course?.courseOutput?.description);
    },[course])

    const onUpdateHandler= async()=>{
        course.courseOutput.courseName=name;
        course.courseOutput.description=description;
         console.log(course);
         const result=await db.update(CourseList).set({
                courseOutput:course?.courseOutput
         }).where(eq(CourseList?.id, course?.id))
         .returning({id:CourseList.id});
         refreshData(true);
         console.log(result);
         
         
    }

  return (
    <Dialog>
  <DialogTrigger> <HiMiniPencilSquare /></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Course Title & Description  </DialogTitle>
      <DialogDescription>
        
        <span className='mt-3'>
            <label>
                Course Title
            </label>
            <Input defaultValue={course?.courseOutput?.courseName}
            onChange={(event)=>setName(event?.target.value)}/>
        </span>

        <span>
            <label> Description</label>
            <Textarea className="h-40" defaultValue={course?.courseOutput?.description}
            onChange={(event)=>setDescription(event?.target.value)}/>
        </span>
        
      </DialogDescription>
    </DialogHeader>
    
        <DialogClose className="float-right bg-primary text-white w-20 rounded h-10" onClick={onUpdateHandler}>
            Update
        </DialogClose>
    
  </DialogContent>
</Dialog>

  )
}

export default EditCourseBasicInfo