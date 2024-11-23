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
import { HiMiniPencilSquare } from 'react-icons/hi2'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AlertDialogFooter } from '@/components/ui/alert-dialog'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/configs/db'
  

function EditChapters({course,index,refreshData}) {
    const Chapters=course?.courseOutput?.chapters;

    const [name,setName]=useState();
    const [about,setAbout]=useState();

    useEffect(()=>{
        setName(Chapters[index].chapterName);
        setAbout(Chapters[index].about)
    },[course])

    const onUpdateHandler=async()=>{
        course.courseOutput.chapters[index].chapterName=name;
        course.courseOutput.chapters[index].about=about;
        
        const result=await db.update(CourseList).set({
            courseOutput:course?.courseOutput
     }).where(eq(CourseList?.id, course?.id))
     .returning({id:CourseList.id});

     
     console.log(result);
     refreshData(true);
    }

  return (
    <Dialog>
    <DialogTrigger><HiMiniPencilSquare /></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Chapter</DialogTitle>
        <DialogDescription>
         
        <span className='mt-3'>
            <label>
                Course Title
            </label>
            <Input defaultValue={Chapters[index].chapterName}
            onChange={(event)=>setName(event?.target.value)}/>
        </span>

        <span>
            <label> Description</label>
            <Textarea className="h-40" defaultValue={Chapters[index].about}
            onChange={(event)=>setAbout(event?.target.value)}/>
        </span>


        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
      <DialogClose className="float-right bg-primary text-white w-20 rounded h-10" onClick={onUpdateHandler}>
            Update
        </DialogClose></DialogFooter>
    </DialogContent>
  </Dialog>
  
  )
}

export default EditChapters
