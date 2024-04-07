import React, { useCallback } from 'react'
import { useState } from 'react';
// import ReactStars from 'react-rating-star-with-type'
const Starts = () => {
    const [star, setStar] = useState(1);
    const onChange=useCallback((nextValue)=>{
        setStar(nextValue)
    },[star])
  return (
    <div className='flex'>
          
    <input
        type='number'
        value={star}
        onChange={(e)=>{setStar(e.target.value)}}
        className='w-8'
    ></input>
    </div>
  )
}

export default Starts