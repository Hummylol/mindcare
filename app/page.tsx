import Article from '@/components/homepagecomps/Article'
import Calendar from '@/components/homepagecomps/Calendar'
import DynamicContent from '@/components/homepagecomps/DynamicContent'
import Journal from '@/components/homepagecomps/Journal'
import MoodSelector from '@/components/homepagecomps/MoodSelector'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
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

export default page
