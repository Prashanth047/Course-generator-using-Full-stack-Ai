import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


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
  
  import { HiOutlineTrash } from "react-icons/hi2";

function DropDownOption({children,handleOnDelete}) {
    const [openAlert,setOpenAlert]=useState(false);

   

  return (
    <div>
    <DropdownMenu>
    <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
    <DropdownMenuContent>
      

      <DropdownMenuItem className='flex items-center gap-1' onClick={()=>setOpenAlert(true)}> 
        <HiOutlineTrash/>Delete
        </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>


  <AlertDialog open={openAlert}>
  
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={()=>setOpenAlert(false)}> Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=>{handleOnDelete();setOpenAlert(false);}}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  </div>
  )
}

export default DropDownOption
