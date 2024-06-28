import React from 'react';
import { useDispatch } from "react-redux";
import { itemAdded } from "../reducers/cartSlice";
import { toast } from 'react-toastify';

const ProductCart = (props) => {
    const { title, description, price, image } = props.product || {};
    const dispatch = useDispatch();

    const addItems = () => {
        dispatch(itemAdded(props.product));
        toast.success(`${title} was added to Cart Successfully`);
    };

    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <div className="product-title">{title}</div>
            <div className="product-desc">{description}</div>
            <div className="product-price">${price.toFixed(2)}</div>
            <button className="add-to-cart-btn" onClick={addItems}>Add Cart</button>
        </div>
        
    );
};

export default ProductCart;
