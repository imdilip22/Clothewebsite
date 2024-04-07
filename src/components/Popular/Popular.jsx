import React from 'react'
import data_product from '../../assets/data'
import Item from '../item/Item'
const Popular = () => {
  return (
    <div className='mt-8 p-4'>
        {/* <div className='text-center p-4'>
        <h1 className='font-extrabold text-xl'>Popular in women</h1>
        </div> */}
       <div className='flex flex-1 flex-wrap justify-center gap-16'>
       {
            data_product.map((ele,index)=>{
               return(
                <Item 
                key={index}
                name={ele.name}
                image ={ele.image}
                newprice ={ele.new_price}
                oldprice ={ele.old_price}
            />
               )
            })
        }
       </div>
       
    </div>
  )
}

export default Popular