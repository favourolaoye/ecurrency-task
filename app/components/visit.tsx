import Link from 'next/link'
import React from 'react'

export default function Visit() {
  return (
<div>
    <div className='flex flex-col w-full p-5 mt-16 max-w-3xl m-auto text-center md:py-16 md:px-0 md:flex-row'>
      <div className="grid gap-6 text-sm">
        <h2 className='text-4xl font-bold text-blueShade'>VISIT OUR SHOP</h2>
        <p className='text-base text-textCol'>Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</p>
        <Link href='/shop'>
          <button className='bg-pinkShade mx-auto p-3 w-1/2 md:w-1/5 font-semibold text-white rounded-md'>Visit shop</button>
        </Link>
      </div>
    </div>
    <hr className='bg-divider border-t my-6 w-3/4 mx-auto'/>
</div>
  )
}
