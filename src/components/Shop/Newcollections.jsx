import React from 'react'
import new_collections from '../../assets/new_collections'
import Item from '../item/Item'
const Newcollections = () => {
  return (
    <div>
        <div className='mt-16' >
            <h1 className='text-center text-xl font-extrabold'>New Collections</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-16' id='newcollection'>
            {
                new_collections.map((ele,index)=>{
                    return(
                        <Item 
                        id ={ele.id}
                        key={ele.id}
                        name={ele.name}
                        image={ele.image}
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

export default Newcollections