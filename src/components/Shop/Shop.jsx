import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from './Offers'
import Newcollections from './Newcollections'
import NewsLetter from './NewsLetter'
const Shop = () => {
  return (
    <>
      <Hero/>
      <Offers/>
      <Popular/>
      <Newcollections/>
      <NewsLetter/>
    </>
  )
}

export default Shop