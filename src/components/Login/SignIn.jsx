import React from 'react'

const SignIn = () => {
  return (
    <div className='bg-pink-50 min-h-screen flex justify-center items-center'>
    <div className='bg-white shadow-sm p-10'>
      <h1 className=' font-extrabold text-red-600 text-3xl pb-5'>Sign In</h1>
          <div className='mt-4'>
            <input 
              type="email"
              placeholder='Enter Email'
              className='w-[400px] border px-5 py-3'
            ></input>
          </div>
          <div className='mt-4'>
            <input 
              type="password"
              placeholder='Enter Password'
              className='w-[400px] border px-5 py-3'
            ></input>
          </div>
          <div>
            <button className='w-[400px] bg-red-600 mt-4 py-3 text-white'>Continue</button>
          </div>
    </div>
  </div>
  )
}

export default SignIn