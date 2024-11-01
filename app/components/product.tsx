"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
export default function Product() {

    const [ unit, setUnit ] = useState(1);
    const [ price, setPrice ] = useState(50);

    const handleIncrease = () =>{
        setUnit(unit => unit + 1);
        setPrice(price => price + 50);
    }
    
    const handleDecrease = () =>{
        if(unit > 1){
            setUnit(unit=> unit - 1);
            setPrice(price=> price - 50);
        }
    }
  return (
<div>
    <div className='w-full max-w-4xl px-4 py-8 md:py-16 text-blueShade md:px-0 mx-auto'>
        <div className='flex flex-col items-center md:flex-row'>
            <div className='w-full'>
                <Image src='/product.png' alt='SleepStiq Melatonin' layout='responsive' width={500} height={500} className='w-full h-full'/>
            </div>
            <div className='grid gap-6 w-full p-8 md:p-16'>
                <h2 className='font-bold text-lg md:text-xl mb-4'>About Product</h2>
                <p className='text-sm'>Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</p>
                <div className='grid gap-2'>
                    <span>😊  Promotes calm and relaxation.</span>
                    <span>💤  Inhalation allows for a rapid effect.</span>
                    <span>✅  100% drug-free, plant-based ingredients.</span>
                    <span>‍⚕️  3rd-party lab tested.</span>
                </div>
                <div className='flex justify-between gap-4 text-black'>
                    <div>
                        <p className='font-semibold'>Price</p>
                        <span>USD ${price}.00</span>
                    </div>
                    <div>                        
                        <p className='font-semibold'>Unit</p>
                        <div className='flex gap-4 items-center border border-black p-2 justify-between'>
                            <button className='w-4 rounded-full' onClick={handleDecrease}><ChevronDown/></button>
                            <span>{unit}</span>
                            <button className='w-4 rounded-full' onClick={handleIncrease}><ChevronUp/></button>
                        </div>
                    </div>
                </div>
                <Link href='https://www.flutterwave.com' target='_blank' rel='noopener noreferrer'>
                    <button className='bg-pinkShade p-3 w-1/2 md:w-1/3 font-semibold text-white rounded-md'>Buy</button>
                </Link>
            </div>
        </div>
    </div>
    <hr className="border-t border-divider my-6 w-3/4 mx-auto" />
</div>
  )
}
