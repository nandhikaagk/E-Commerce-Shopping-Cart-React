import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers=()=>{
    return(
        <div className='offers'>
            <div className='offers-left'>
              <h1>Discounts</h1>
              <h1>For Above Rs 500 </h1>
              <p>Get Discount for Each Tablets</p>
              <button>Check Discount</button>
            </div>
            <div className='offers-right'>
                <img src={exclusive_image}alt=""/>
            </div>
            
        </div>
    )
}
export default Offers;