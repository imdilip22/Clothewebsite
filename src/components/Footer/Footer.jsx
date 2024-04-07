import React from 'react'
import lg from '../../assets/logo_big.png'
import insta from '../../assets/instagram_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'
import pintester from '../../assets/pintester_icon.png'
const Footer = () => {
  return (
    <footer className='border border-gray-300 shadow-md p-8 mt-8'>
      <div>
        <div className='flex justify-center'>
              <img src={lg} alt="no logo" className=''></img>
              <a className='flex  items-center gap-2 font-extrabold text-[38px] ml-2'>Dilip's<span className='text-orange-600'>Cloths</span></a>
        </div>
        <div className='pt-4'>
          <ul className='flex justify-center gap-4 text-sm text-black/60'>
            <li>company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex gap-8 justify-center mt-6'>
          <img src={whatsapp} className='h-4 w-4' alt="wp"></img>
          <img src={insta} className='h-4 w-4' alt="wp"></img>
          <img src={pintester} className='h-4 w-4' alt="wp"></img>
        </div>
      </div>
        <div className='border border-gray-500 border-solid mt-16 mx-44'>
        </div>
        <div className='flex mt-1 justify-center'>
          <p className='text-sm'>Copyright @2023 - All Right Reserved</p>
        </div>
    </footer>
  )
}

export default Footer