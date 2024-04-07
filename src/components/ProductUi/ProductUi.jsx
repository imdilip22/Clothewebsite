import React from 'react'
import arrowicon from '../../assets/breadcrum_arrow.png'
const ProductUi = (props) => {
  return (
    <div>
       <div className='flex items-center gap-1'>
           <a>Home</a><img src={arrowicon} alt="arrow" className='w-2 h-3'></img>
           <a>Shop</a><img src={arrowicon} alt="arrow" className='w-2 h-3'></img>
           <a>{props.category}</a><img src={arrowicon} alt="arrow" className='w-2 h-3'></img>
           <a>{props.name}</a>
       </div>
    </div>
  )
}

export default ProductUi