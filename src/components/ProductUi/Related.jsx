import React from 'react'
import  data from '../../assets/data'
import Item from '../item/Item'
const Related = () => {
  return (
    <div className='mt-16'>
        <div>
            <div className='text-center '>
                <a className='text-5xl font-bold border-b-4 border-black'>Related Products</a>
            </div>
            <div className='flex justify-center gap-16 mt-8'>
                {
                    data.map((e)=>{
                       return <Item 
                            id = {e.id}
                            key = {e.id}
                            name ={e.name}
                            image ={e.image}
                            newprice ={e.new_price}
                            oldprice = {e.old_price}
                        />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Related