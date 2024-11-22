import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'

  
function LoadingDialog({loading}) {
  return (
    <AlertDialog open={loading}>
  
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle></AlertDialogTitle>
      <AlertDialogDescription>
      < span className='flex flex-col items-center py-10'>
                   <Image  src={'/loader.gif'} width={100}  height={100} unoptimized alt='Loader'/>
                   Please wait.. Ai working on your course
            </span>
      </AlertDialogDescription>
    </AlertDialogHeader>
    
  </AlertDialogContent>
</AlertDialog>

  )
}

export default LoadingDialog
