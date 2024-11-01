'use client'

import React, { useState, useEffect } from 'react'

const reviews = [
  {
    text: "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
    name: "John Matthews",
    rating: 5,
  },
  {
    text: "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    name: "Eunice Oliver",
    rating: 5,
  },
  {
    text: "It is a really good product and helps me sleep better at night!",
    name: "Laura Davies",
    rating: 5,
  },
  {
    text: "Helps me relax and breathe. Stress level goes down.",
    name: "Jane Bocks",
    rating: 5,
  },
]

export default function Reviews() {
  const [startIndex, setStartIndex] = useState(0)

  const goToNext = () => {
    setStartIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    const timer = setInterval(goToNext, 3000) 
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative p-4 sm:p-6 mt-10 sm:mt-20">
      <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:justify-center gap-4 pb-4 sm:pb-0">
        {[0, 1, 2, 3].map((offset) => {
          const index = (startIndex + offset) % reviews.length
          const review = reviews[index]
          return (
            <div
              key={index}
              className="bg-yellowShade p-4 sm:p-6 w-64 flex-shrink-0 sm:flex-shrink flex flex-col space-y-4"
            >
              <p className="text-gray-700 italic text-sm sm:text-base">{review.text}</p>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{review.name}</h4>
                <div className="flex items-center">
                  {Array(review.rating)
                    .fill(null)
                    .map((_, i) => (
                      <span key={i} className="text-green-500 text-base sm:text-lg">★</span>
                    ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}