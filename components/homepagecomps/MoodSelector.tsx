import React from 'react';
import Image from 'next/image';

const MoodSelector = () => {
  return (
    <div className='h-full w-full flex flex-col gap-1 items-center p-2'>
      {/* Current Mood Section */}
      <div className='flex h-1/2 w-full gap-1'>
        <section className='w-2/3 dark:dark:bg-[#303030] bg-white flex items-center justify-center rounded-lg text-4xl'>
          Current Mood
        </section>
        <section className='w-1/3 dark:dark:bg-[#303030] bg-white flex items-center justify-center rounded-lg'>
          <Image
            src='https://cdn-icons-png.flaticon.com/512/18761/18761917.png'
            alt='Current Mood Icon'
            width={120}
            height={120}
            className='dark:invert'
          />
        </section>
      </div>

      {/* Mood Grid */}
      <div className='h-1/2 w-full grid grid-cols-4 gap-1'>
        {/* Button 1 */}
        <button className='dark:dark:bg-[#303030] bg-white flex items-center justify-center rounded-lg'>
          <Image
            src='https://cdn-icons-png.flaticon.com/512/158/158409.png'
            alt='Happy Mood'
            width={70}
            height={70}
            className='dark:invert'
          />
        </button>

        {/* Button 2 */}
        <button className='dark:bg-[#303030] bg-white flex items-center justify-center rounded-lg'>
          <Image
            src='https://cdn-icons-png.flaticon.com/512/158/158398.png'
            alt='Sad Mood'
            width={70}
            height={70}
            className='dark:invert'
          />
        </button>

        {/* Button 3 */}
        <button className='dark:dark:bg-[#303030] bg-white flex items-center justify-center rounded-lg'>
          <Image
            src='https://cdn-icons-png.flaticon.com/512/3260/3260838.png'
            alt='Neutral Mood'
            width={70}
            height={70}
            className='dark:invert'
          />
        </button>

        {/* Button 4 */}
        <button className='dark:dark:bg-[#303030] bg-white flex items-center justify-center rounded-lg'>
          <Image
            src='https://cdn-icons-png.flaticon.com/512/16279/16279546.png'
            alt='Angry Mood'
            width={70}
            height={70}
            className='dark:invert'
          />
        </button>
      </div>
    </div>
  );
};

export default MoodSelector;
