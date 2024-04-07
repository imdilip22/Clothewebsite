import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import ShowCategary from './components/Categary/ShowCategary'
import Product from './components/Product/Product'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import man_banner from './assets/banner_mens.png'
import woman_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'
import SignIn from './components/Login/SignIn'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>} ></Route>
      <Route path="/mens" element={<ShowCategary banner={man_banner} category="men"/>} ></Route>
      <Route path="/Women" element={<ShowCategary banner={woman_banner} category="women"/>} ></Route>
      <Route path="/Kids" element={<ShowCategary banner={kids_banner} category="kid"/>} ></Route>
      <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}>
      </Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App