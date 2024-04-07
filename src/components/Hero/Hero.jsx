import React from 'react'
import hand from '../../assets/hand_icon.png'
import arrow from '../../assets/arrow.png'
import hero from '../../assets/hero_image.png'
const Hero = () => {
  return (
    <div className='min-h-screen flex bg-pink-100 gap-60'>
        <div className='flex items-center justify-center w-1/2'>
            <div>
            <p className='mb-8 font-extrabold'>New Arrivals ONLY</p>
            <h1 className='flex text-5xl font-extrabold'>new<img src={hand} className="h-16 w-16" alt="hand"/></h1>
            <h1 className='text-5xl font-extrabold'>Collections</h1>
            <h1 className='text-5xl font-extrabold mt-1'>for everyone</h1>
            <button className='flex items-center bg-red-600 px-4 py-2 text-white rounded-3xl mt-12'>Latest Collection<img src={arrow} className="h-3 w-5 ml-1" alt='arrow'/></button>
            </div>
        </div>
        <div className=' '>
            <img src={hero} alt="hero image" className='h-[80vh]'></img>
        </div>
    </div>
  )
}

export default Hero