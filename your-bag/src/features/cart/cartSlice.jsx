import cartItems from "../../cartItems"

const initialStateCart = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
 

}

const cartReducer = (state = initialStateCart, action) => {
  switch (action.type) {  
    case 'cart/inc':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 } 
            : item
        )
      };
    case 'cart/dec':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id && item.amount > 1
            ? { ...item, amount: item.amount - 1 }
            : item
        )
      };
    case 'cart/remove':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case 'cart/total':
      let total = state.cartItems.reduce((acc, item) => acc + (item.amount * item.price), 0);
      return { ...state, total: total };
      case 'cart/clearCart':
        return {
            ...state,
            cartItems: [],
            amount: 0,
            total: 0,
        } 
    default:
      return state;
  }
};

export const incrementItem = (id) => ({
  type: 'cart/inc',
  payload: { id },
});

export const decrementItem = (id) => ({
  type: 'cart/dec',
  payload: { id },
});

export const removeItem = (id) => ({
  type: 'cart/remove',
  payload: { id },
});

export const calculateTotal = () => ({
  type: 'cart/total',
});

export const clearCart = () => ({
  type: 'cart/clearCart'
})

export default cartReducer


