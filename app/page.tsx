"use client";

import Article from '@/components/homepagecomps/Article'
import Calendar from '@/components/homepagecomps/Calendar'
import DynamicContent from '@/components/homepagecomps/DynamicContent'
import Journal from '@/components/homepagecomps/Journal'
import MoodSelector from '@/components/homepagecomps/MoodSelector'
import Navbar from '@/components/Navbar'
import { useSession } from 'next-auth/react'
import React from 'react'

const Page = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    return (
      <div className='flex justify-center items-center h-[100vh]'>
        <Navbar />
        <div className='text-xl'>Please log in to access this content.</div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center h-screen w-full p-4'>
        <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-lg">
          <MoodSelector />
        </div>
      </div>
    </>
  )
}

export default Page
