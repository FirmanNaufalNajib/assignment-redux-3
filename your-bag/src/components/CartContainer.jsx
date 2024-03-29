import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import CartItem from './CartItem';
import { calculateTotal } from '../features/cart/cartSlice';

const CartContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch()
  
  const { cartItems, total: totalAmount } = useSelector((store) => store.cart);

  const handleClearCartConfirmation = () => {
    setIsModalOpen(true);
  };
  const clearCartAndCloseModal = () => {
    dispatch(clearCart()); 
    dispatch(calculateTotal()); 
    setIsModalOpen(true); }
    

  useEffect(() => {
    dispatch(calculateTotal()); 
  }, [cartItems, dispatch]);

  if (totalAmount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalAmount.toFixed(2)}</span>
          </h4>
        </div>
        <>
          {isModalOpen && <Modal onConfirm={clearCartAndCloseModal} onCancel={() => setIsModalOpen(false)} />}
          <section className="cart">
            <button className="btn clear-btn" onClick={handleClearCartConfirmation}>
              Clear cart
            </button>
          </section>
        </>
      </footer>
    </section>
  )
}
export default CartContainer
