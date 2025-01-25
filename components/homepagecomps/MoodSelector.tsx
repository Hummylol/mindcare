import React from 'react';
import { Separator } from '../ui/separator';
import { 
  IconMoodHappy, 
  IconMoodSad, 
  IconMoodAngry, 
  IconMoodEmpty, 
  IconMoodCrazyHappy 
} from '@tabler/icons-react';

const MoodSelector = () => {
  return (
    <div className='h-full w-full flex flex-col gap-1 items-center p-2'>
      <div className='flex h-1/2 w-full gap-1'>
        <section className='w-2/3 dark:bg-[#0a0a0a] bg-white flex items-center justify-center rounded-lg text-4xl'>
          Current Mood
        </section>
        <section className='w-1/3 dark:bg-[#0a0a0a] bg-white flex items-center justify-center rounded-lg'>
        </section>
      </div>

      <div className='h-1/2 w-full grid grid-cols-4 gap-1'>
        <button className='dark:bg-[#0a0a0a] bg-white flex items-center justify-center rounded-lg'>
        </button>
        <button className='dark:bg-[#0a0a0a] bg-white flex items-center justify-center rounded-lg'>
        </button>
        <button className='dark:bg-[#0a0a0a] bg-white flex items-center justify-center rounded-lg'>
        </button>
        <button className='dark:bg-[#0a0a0a] bg-white flex items-center justify-center rounded-lg'>
        </button>
      </div>
    </div>
  );
};

export default MoodSelector;
