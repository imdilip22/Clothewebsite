import React from 'react'
import Product from '../Product/Product'
import {Link,NavLink} from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='w-48 h-92 p-4 shadow-xl' key={props.id}>
        <img src={props.image} className='h-44 w-40' alt="item"></img>
        <div>
        <p className='text-[12px]' onClick={window.scrollTo(0,0)}><Link to={`/product/${props.id}`}>{props.name}</Link></p>
        <div className='flex gap-2'>
        <p className='font-bold'>{props.newprice}</p>
        <p className='line-through text-black/60'>{props.oldprice}</p>
        </div>
        </div>
    </div>
  )
}

export default Item