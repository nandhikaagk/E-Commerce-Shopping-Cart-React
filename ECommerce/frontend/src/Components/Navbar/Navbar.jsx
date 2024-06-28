import React ,{useState} from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    const[menu,setMenu]=useState("shop");
    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img className='logo-image' src={logo} alt=" "/>
                <p>Pharmacy</p>
            </div>
           <div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Buy</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("elders")}}><Link style={{textDecoration:'none'}}to='/elders'>Elders</Link>{menu==="elders"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("aged")}}><Link style={{textDecoration:'none'}} to='aged'>Aged</Link>{menu==="aged"?<hr/>:<></>}</li>

            </ul>
           </div>
           <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button> </Link>
            <Link><img src={cart_icon} alt=""/></Link>
            <div className='nav-cart-count'>0</div>
            

           </div>

        </div>
    )
}
export default Navbar;