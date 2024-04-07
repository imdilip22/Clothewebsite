import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-pink-50 min-h-screen flex justify-center items-center'>
      <div className='bg-white shadow-sm p-10'>
        <h1 className=' font-extrabold text-red-600 text-3xl pb-5'>Sign Up</h1>
        <div>
            <div>
              <input 
                type="text"
                placeholder='Your name'
                className='w-[400px] border px-5 py-3'
              ></input>
            </div>
        </div>
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
            <div className='mt-2'>
              <p className='text-sm'>Already have account? <NavLink to="/signin" className="text-blue-700">Sign In</NavLink></p>
              <div className='flex gap-1 mt-2'>
              <input
                type='checkbox' required></input>
                <p className='text-sm text-black/60'>By continuing,I agree to the terms of use & privacy Policy</p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Login