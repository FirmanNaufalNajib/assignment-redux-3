import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from '../features/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../icons'
//import cartItems from '../cartItems';


const CartItem = ({ id, img, title, price, amount }) => { 

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cartItems)
  
  console.log('log', cart)

  const handleIncrement = () => {
    dispatch(incrementItem(id));
    
  };
  const handleDecrement = () => {
    if (id && amount > 1){
    return dispatch(decrementItem(id));
    } return dispatch(removeItem(id));
  };
  const handleRemove = () => {
    dispatch(removeItem(id));
  };


  
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={handleRemove}>remove</button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncrement}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleDecrement}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;


