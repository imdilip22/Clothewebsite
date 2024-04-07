import { createContext, useState } from "react";
import React from "react";
import all_product from '../assets/all_product'
export const Shopcontext  = createContext("")
const getdefaultCart =()=>{
    let cart ={}
    for(let i=0;i<all_product.length+1;i++){
        cart[i] = 0;
    }
    return cart
}
const ShopcontextProvider =(props)=>{
    
    const [cartitem,setcartitem] = useState(getdefaultCart())
    const [count,setcount] = useState(0)
    const addtocart =(itemID)=>{
        setcartitem((prev=>({...prev,[itemID]:prev[itemID]+1})))
        setcount(count+1)
    }
    const removetocart =(itemID)=>{
        setcartitem((prev=>({...prev,[itemID]:prev[itemID]-1})))
        setcount(count-1)
    }
    const gettotalamout=()=>{
        let tm = 0
        for(let i in cartitem){
            if(cartitem[i]>0){
                let iteminfo = all_product.find((ele)=>ele.id===Number(i))
                tm += iteminfo.new_price * cartitem[i]
            }
        }
        return tm;
    }
    const contaxvalue ={all_product,cartitem,addtocart,removetocart,count,gettotalamout}
    console.log(cartitem)
    return(
        <Shopcontext.Provider value={contaxvalue}>

            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider