import React, { useContext, useState } from 'react'
import Logo from '../../assets/logo_big.png'
import Cart  from '../../assets/cart_icon.png'
import './Navbar.css'
import {Link,NavLink} from 'react-router-dom'
import { Shopcontext } from '../../Context/Context'
const Navbar = () => {
  const [menu,setmenu] = useState("shop")
  const [counter,setcounter] = useState(0)
  const {count} = useContext(Shopcontext)
  return (
   <>
   <header>
      <nav className='flex justify-between w-full shadow-md items-center p-4'>
      <Link to={"/"}>
        <div className='flex hover:cursor-pointer' onClick={()=>{
          
        }}>
          <a className='flex  items-center gap-2 font-extrabold text-[25px]'><img src={Logo} alt="logo" className='w-10 h-10'/>Dilip's<span className='text-orange-600'>Cloths</span></a>
        </div></Link>
        <div className='flex items-center'>
          <ul className='uls flex gap-9 text-[15px]'>
            <li onClick={()=>setmenu("shop")} className='cursor-pointer'><NavLink to="/">Shop</NavLink>{menu==="shop" ? <hr/>:""}</li>
            <li onClick={()=>setmenu("Men")} className='cursor-pointer'><NavLink to="/mens">Men</NavLink>{menu==="Men" ? <hr/>:""}</li>
            <li onClick={()=>setmenu("Women")} className='cursor-pointer'><NavLink to="/women">Women</NavLink>{menu==="Women" ? <hr/>:""}</li>
            <li onClick={()=>setmenu("kids")} className='cursor-pointer'><NavLink to="/kids">Kids</NavLink>{menu==="kids" ? <hr/>:""}</li>
          </ul>
        </div>
        <div className='flex gap-7 mr-8'>
          <Link to="/login"><button className='bg-orange-500 px-2 rounded-xl text-white shadow active:scale-90'>SignUp</button></Link>
          <Link to="/Cart" className='flex'><img src={Cart} alt="cart" className='h-8 w-8 relative z-10'></img><div className='flex justify-center items-center rounded-full h-4 w-4 text-white text-[10px] bg-red-600 absolute ml-6 z-20'>{count}</div></Link>
        </div>
      </nav>
   </header>
   </>
  )
}

export default Navbar