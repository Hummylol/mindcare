import { Separator } from '@/components/ui/separator';
import React from 'react';

const Journal = () => {
  return (
    <div className='h-full w-full p-2'>
      <div className="text-md text-black dark:text-white -mt-1">Journal</div>
      <Separator />
      <div
        contentEditable
        className='mt-1 p-1 font-light rounded-2xl dark:bg-[#303030] bg-white overflow-y-auto scrollable-left'
        style={{ maxHeight: '220px' }}
      >
        <div className='scrollable-right'>
          <p><strong>Date:</strong> October 1, 2023</p>
          <p>Today was a productive day! I managed to complete my tasks and even had some time to relax. I went for a walk in the park and enjoyed the beautiful weather.</p>

          <p><strong>Date:</strong> October 2, 2023</p>
          <p>Feeling a bit overwhelmed today. There’s a lot on my plate, but I’m trying to take it one step at a time. I had a nice chat with a friend that helped lift my spirits.</p>

          <p><strong>Date:</strong> October 3, 2023</p>
          <p>Had a great day! I started a new book and couldn’t put it down. I also tried a new recipe for dinner, and it turned out delicious!</p>

          <p><strong>Date:</strong> October 4, 2023</p>
          <p>Today was challenging. I faced some setbacks at work, but I’m learning to stay positive and focus on solutions rather than problems.</p>

          <p><strong>Date:</strong> October 5, 2023</p>
          <p>Ended the week on a high note! I completed all my tasks and treated myself to a movie night. Looking forward to the weekend!</p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
