import React from 'react'
import exoff from '../../assets/exclusive_image.png'
import '../../index.css'
const Offers = () => {
  return (
    <div className='flex justify-center min-h-screen'>
       <div className='offers-div-1 w-10/12 h-10/12 flex justify-between m-8 '>
       <div className='flex justify-center items-center w-1/2'>
            <div>
                <p className='text-4xl font-bold'>Exclusive</p>
                <p className='text-3xl'>Offers for you</p>
                <p className='text-2xl'>only On Best Selling products</p>
                <button className='mt-16 bg-white px-3 py-2 rounded-2xl shadow-md shadow-slate-800'>Check now</button>
            </div>
            
        </div>
        <div>
            <img src={exoff} alt='offers' className='h-[70vh]'></img>
        </div>
       </div>
    </div>
  )
}

export default Offers