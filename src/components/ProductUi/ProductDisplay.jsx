import React, { useContext, useState } from 'react'
// import ReactStars from 'react-rating-star-with-type'
import Starts from './Starts'
import { Shopcontext } from '../../Context/Context'
const ProductDisplay = (props) => {
    const {product} = props
    const {addtocart} = useContext(Shopcontext)
    const [size,setsize] = useState("")
  return (
    <div className='mt-8 p-8'>
        <div className='flex gap-8'>
            <div>
                <img src={product.image} alt="item"></img>
            </div>
            <div className='flex justify-start'>
                <div>
                    <p className='text-2xl font-bold'>{props.name}</p>
                    <Starts/>
                    <div className='flex gap-4 mt-8'>
                    <a className='line-through text-gray-400 text-xl'>&#36;
                        {product.old_price}
                    </a>
                    <a className='text-red-500 font-extrabold text-xl'>
                        &#36;
                        {product.new_price}
                    </a>
                    </div>
                    <p className='mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, placeat!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='mt-4'>
                        <p className='text-lg font-bold pb-4'>Select Size</p>
                    <div className='flex gap-2'>
                        <div className="w-8 h-8 flex justify-center items-center bg-red-500"
                         onClick={(e)=>{setsize("S")}
                    }>S
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center bg-red-500"
                         onClick={(e)=>{setsize("S")}
                    }>M
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center bg-red-500"
                         onClick={(e)=>{setsize("S")}
                    }>L
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center bg-red-500"
                         onClick={(e)=>{setsize("S")}
                    }>XL
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center bg-red-500"
                         onClick={(e)=>{setsize("S")}
                    }>XXL
                    </div>
                        </div>
                        </div>
                    <div className='mt-6'>
                        <button className='bg-red-500 text-white w-48 py-2 shadow-md' onClick={()=>{addtocart(product.id)}} >Add To Cart</button>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ProductDisplay