"use client";

import React from 'react'
import HeroSection from './components/hero'

import Reviews from './components/review';
import Testimonial from './components/testimonial';
import Mission from './components/mission';
import Visit from './components/visit';
import ProductReviews from './components/productReview';
import ProductFeature from './components/productFeature';


export default function HomePage() {
  return (
    <main className='overflow-x-hidden'>
      <HeroSection/>
      <Testimonial/>
      <Reviews/>
      <ProductFeature/>
      <Mission/>
      <Visit/>
      <ProductReviews/>
    </main>
  )
}
