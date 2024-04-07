import React, { useContext } from 'react'
import ProductUi from '../ProductUi/ProductUi'
import { Shopcontext } from '../../Context/Context'
import {useParams} from 'react-router-dom'
import ProductDisplay from '../ProductUi/ProductDisplay'
import Related from '../ProductUi/Related'
const Product = () => {
    const {all_product} = useContext(Shopcontext)
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <ProductUi products={product}
        category = {product.category}
        name ={product.name}
      />
      <ProductDisplay
        product ={product}
        id={product.id}
        image={product.image}
        name={product.name}
        oldprice = {product.old_price} 
        newprice = {`${product.new_price } rs`} 
      />
      <Related/>
    </div>
  )
}

export default Product