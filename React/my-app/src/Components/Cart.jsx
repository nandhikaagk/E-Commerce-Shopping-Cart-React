import { useSelector } from "react-redux";
import Cartitem from "./Cartitem";

const Cart=()=>{
    const items=useSelector((state)=>state.cart.items)
    return(
        <>
      
        {/* <div>{JSON.stringify(items)}</div> */}
        <br></br><br></br>
        <center><div className="my-cart">My Cart</div></center><br></br>
        {items.map((item)=><Cartitem  item={item} />)}
      
        </>
    )
}
export default Cart;