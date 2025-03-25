import React from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const page = () => {
  return (
    <>
      <div>Anonymous Chat</div>
      <div className='h-12 w-12 absolute top-0 right-2'><ThemeToggle/></div>
    </>
  )
}

export default page