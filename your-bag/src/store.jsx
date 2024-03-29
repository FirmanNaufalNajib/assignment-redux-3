import { createStore, combineReducers } from 'redux';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';
//import {composeWithDevTools} from '@redux-devtools/extension'

const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer
})

const store = createStore(rootReducer)

export default store
