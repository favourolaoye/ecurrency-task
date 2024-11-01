import React from 'react'
import ShopHero from '../components/shopHero'
import Product from '../components/product'
import Reviews from '../components/review'

export default function Shop() {
  return (
    <div>
        <ShopHero/>
        <Product/>
        <Reviews/>
    </div>
  )
}
