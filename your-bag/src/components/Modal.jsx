import { close } from '../features/modal/modalSlice'
import { useDispatch, } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { useSelector } from 'react-redux'


const Modal = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((store) => store.modal.isOpen);

  const handleConfirm = () => {
    dispatch(clearCart());
    dispatch(close());
  };

  const handleCancel = () => {
    dispatch(close());
  };

  if (!isOpen) {
    return true;
  }
  
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={handleConfirm}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={handleCancel}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
export default Modal