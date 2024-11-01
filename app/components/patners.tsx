import React from 'react'
import Image from 'next/image'

export default function Partners() {
  const sponsors = [
    { img: '/google.png' },
    { img: '/forbes.png' },
    { img: '/bloomberg.png' },
    { img: '/SleepReview.png' },
    { img: '/influencive.png' },
  ]

  return (
    <div className="relative md:absolute -bottom-6 md:left-[165px] left-0 right-0 z-10 shadow-xl">
      <div className="bg-white shadow-custom p-3 md:p-8 max-w-none mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6 items-center">
          {sponsors.map((sp, id) => (
            <Image 
              key={id} 
              src={sp.img} 
              alt={`Sponsor ${id + 1}`} 
              width={80} 
              height={40} 
              className="w-auto h-6 md:h-8 lg:h-10 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
