import React, { useContext } from 'react';
import CartItem from './CartItem';
import { Shopcontext } from '../../Context/Context';

const Cart = () => {
  // if (Cart.length === 0) {

  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <div className="bg-white p-8 rounded shadow-md">
  //         <h1 className="text-3xl font-bold text-gray-800">Empty cart</h1>
  //       </div>
  //     </div>
  //   );
  // }
  {

  return (
    <div>
      <CartItem />
    </div>
  );}
};

export default Cart;
