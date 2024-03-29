import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
//import store from './store'
//import { increment } from './features/cart/cartSlice'

// store.dispatch(increment())
// console.log(store.getState())

const App = () => {
  const isOpen = false

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
