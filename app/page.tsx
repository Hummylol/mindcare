import Article from '@/components/homepagecomps/Article'
import Calendar from '@/components/homepagecomps/Calendar'
import Journal from '@/components/homepagecomps/Journal'
import MoodSelector from '@/components/homepagecomps/MoodSelector'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen flex pt-12 justify-center'>
      <div className='w-[90%] h-[90%] grid grid-rows-3 grid-cols-6 gap-2'>
        <div className='rounded-2xl dark:bg-[#1e1e1e] bg-[#ebebeb] h-full col-span-2 row-span-1 overflow-hidden'>
          <MoodSelector/>
        </div>

        <div className='rounded-2xl dark:bg-[#1e1e1e] bg-[#ebebeb] h-full col-span-4 row-span-3 overflow-hidden'>
          <div className='h-full'>dynamic content</div>
        </div>

        <div className='rounded-2xl dark:bg-[#1e1e1e] bg-[#ebebeb] h-full col-span-2 row-span-1 overflow-hidden'>
          <Article/>
        </div>

        <div className='rounded-2xl dark:bg-[#1e1e1e] bg-[#ebebeb] h-full col-span-1 row-span-1 overflow-hidden'>
          <Calendar/>
        </div>
        <div className='rounded-2xl dark:bg-[#1e1e1e] bg-[#ebebeb] h-full col-span-1 row-span-1 overflow-hidden'>
          <Journal/>
        </div>
      </div>
    </div>
  )
}

export default page
