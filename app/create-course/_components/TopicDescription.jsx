import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

function TopicDescription() {
    const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);

    const handelInputChange=(fieldname,value)=>{
setUserCourseInput(prev=>({
    ...prev,
    [fieldname]:value
}))
    }

  return (
    <div className='mx-20 lg:mx-44'>
      {/** Input Topic */}
        <div className='mt-5'>
            <label>
                Write the topic for which you want to generate a course(e.g. python,yoga,music):
            </label>
            <Input placeholder={'Topic'} className='h-14 text-xl'
            defaultValue={userCourseInput?.topic}
             onChange={(e)=>handelInputChange('topic',e.target.value)} />
        </div>
{/**Text Area Desc */}
        <div className='mt-5 '>
            <label>
                Tell us more about your course,what you want to include the course(Optional)
            </label>
            <Textarea placeholder={'About your course'} className='h-14 text-xl' 
            defaultValue={userCourseInput?.description}
            onChange={(e)=>handelInputChange('description',e.target.value)} />
        </div>

      
    </div>
  )
}

export default TopicDescription
