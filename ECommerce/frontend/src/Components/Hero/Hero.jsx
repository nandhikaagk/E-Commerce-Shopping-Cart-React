import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.jpg'
const Hero=()=>{
    return(
        <div className='hero'>
           <div className="hero-left">
              <h2>100% Guranteed  
               </h2>
           
          
            <div className="hero-hand-icon">
             <p>Better Medicine & Hope </p>
             
            
           
           </div>
           <div className="hero-latest-btn">
            <div>Order</div>
            {/* <img src={arrow_icon} alt=""/> */}
            </div>
           </div>
           <div className="hero-right"> 
              <img className='image-height' src={hero_image}alt=''/>
           </div>
        </div>
    )
}
export default Hero;