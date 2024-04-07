import React, { useState } from 'react'
import '../../index.css'
const NewsLetter = () => {
  const [email,setemail]=useState('');
  return (
    <div className='mt-32 flex justify-center w-full'>
        <div className='Nl-div-1 p-16 text-center rounded-2xl'>
            <p className='text-[40px] font-bold'>Get Exclusive Offers in Your Email</p>
            <p>Subscribe to our NewsLetter and stay updated</p>
            <div className='mt-8 flex justify-center relative'>
                <input
                    type="email"
                    placeholder='your Email'
                    className='px-6 py-[9px] w-8/12 rounded-3xl border border-gray-600 border-solid focus:outline-none'
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    
                ></input>
                <div className='absolute xl:ml-[420px] sm:ml-[50px]'>
                     <button
                      onClick={()=>{
                        alert("subscribed")
                        setemail('');
                        
                      }}
                     className="bg-black text-white px-2 py-[9px] rounded-3xl ">Subscribe</button>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default NewsLetter