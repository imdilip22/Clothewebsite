import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/Context'
import Item from '../item/Item'


const ShowCategary = (props) => {
  const {all_product}  = useContext(Shopcontext)
  return (
    <div>
      <div>
        <img src={props.banner} alt="nothing"></img>
      </div>
      <div className='flex flex-wrap flex-1 justify-center gap-12 m-8'>
        {
          all_product.map((item,index)=>{
            if(item.category===props.category){
             return (<Item
                id={item.id}
                key={index}
                image={item.image}
                name={item.name}
                newprice ={item.new_price}
                oldprice ={item.old_price}
              />)
            }else{
              return null
            }
          })
        }
      </div>
    </div>
  )
}

export default ShowCategary