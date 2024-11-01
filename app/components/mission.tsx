import Image from 'next/image';
import React from 'react';

export default function Mission() {
  return (
    <div className='flex flex-col w-full gap-8 justify-end mt-20 md:px-0 md:flex-row'>
      <div className="flex flex-col my-auto px-4 gap-4 w-[475px]">
        <h2 className='text-2xl  font-extrabold text-blueShade lg:text-4xl'>OUR MISSION</h2>
        <p className='text-gray-500 text-justify'>We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That is why we created products that aim to -</p>
        <ul className='text-gray-500'>
          <li>✔ Promote Calm</li>
          <li>✔ Support Sleep</li>
          <li>✔ Reduce Stress</li>
          <li>✔ Aid Relaxation</li>
        </ul>
      </div>
      <div className="flex text-gray-500 w-full md:w-1/2">
        <Image src='/mission.png' alt='relaxed woman in a comfy bed' layout='responsive' width={500} height={500} className='w-full h-full'/>
      </div>
    </div>
  );
}
