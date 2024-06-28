import { useDispatch } from 'react-redux';
import { itemsDeleted } from '../reducers/cartSlice';
import { itemsAddMinus } from '../reducers/cartSlice';
import { itemsAddplus } from '../reducers/cartSlice';

import { toast } from 'react-toastify';
const Cartitem=(props)=>{
    const{image,title,price,quantity,id}=props.item
    const dispatch = useDispatch();
    function deleteItem() {
        dispatch(itemsDeleted(id));
        toast.success("Items removed successfully")
    }
    function AddPlus(){
        dispatch(itemsAddplus(id))
    }
    function AddMinus(){
        dispatch(itemsAddMinus(id))
    }
    const total=price*quantity
    return(
        <>
        <div className="cart-item">
            <img src={image}height={50} width={50} />
            <div className="title">{title}</div>
           <div><button className='Icon' onClick={AddMinus}>-</button></div>
            <div className='quantity'>{quantity}</div>
            <div><button className='Icon' onClick={AddPlus}>+</button></div>
            <div >${total.toFixed(2)}</div>
            <button onClick={deleteItem} className="remove">Remove</button>
        </div>
       
        </>
        
    )
}
export default Cartitem;