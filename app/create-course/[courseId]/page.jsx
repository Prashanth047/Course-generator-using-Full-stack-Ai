"use client"

import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import {and,eq} from 'drizzle-orm'
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from './_components/ChapterList'
import { Button } from '@/components/ui/button'
import { GenerateChapterContent_AI } from '@/configs/AiModel'
import LoadingDialog from '../_components/LoadingDialog'
import service from '@/configs/service'
import { useRouter } from 'next/navigation'

function CourseLayout({params}) {
  const {user}=useUser();

  const [course,setCourse]=useState([]);
  const [loading,setLoading]=useState(false);

  const router=useRouter();

  useEffect(()=>{
    
    params &&GetCourse();
  },[params,user])

  const  GetCourse=async()=>{
    
      const { courseId } = await params;
    
    const result=await db.select().from(CourseList)
    .where(and(eq(CourseList.courseId,courseId),
    eq(CourseList?.createdBy,user?.primaryEmailAddress.emailAddress))) 
    setCourse(result[0]);
  console.log(result);
  
  }

  const GenerateChapterContent = async () => {
    setLoading(true);
    const chapters = course?.courseOutput?.chapters;

    for (const [index, chapter] of chapters.entries()) {
       
            try {
                let videoId = '';
                
                // Generate Video URL
                const videoResp = await service.getVideos(course?.name + ':' + chapter?.chapterName);
                videoId = videoResp[0]?.id?.videoId || '';

                // Generate chapter content
                const PROMPT = "Explain the concept in Detail on Topic: "+course?.name+", Chapter: "+chapter?.chapterName+", in JSON Format with list of array with field as title,explanation on give chapter in detail,Code example(Code field in <precode>format) if applicable";
                const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
                const content = JSON.parse(await result.response.text());

                // Save Chapter Content + Video URL
                await db.insert(Chapters).values({
                    chapterId: index,
                    courseId: course?.courseId,
                    content: content,
                    videoId: videoId,
                });
            } catch (error) {
                console.error('Error generating chapter content:', error);
            }
        
    }

    setLoading(false);
    router.replace(`/create-course/${course?.courseId}/finish`);
};

  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
      <h2 className='font-bold text-center text-2xl'> Course Layout</h2>

      <LoadingDialog loading={loading}/>
      {/*Basic Info*/}
      <CourseBasicInfo course={course} refreshData={()=>GetCourse()}/>
      {/*Course Detail*/}
      <CourseDetail course={course}/>
      {/*List of Lesson*/}
      <ChapterList course={course} refreshData={()=>GetCourse()}/>

        <Button className="my-10" onClick={GenerateChapterContent}>Generate Course Content</Button>
    </div>
  )
}

export default CourseLayout
