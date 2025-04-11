import React, { useContext } from 'react'
import UserProgressContext from '../util/userProgressContext';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import Modal from './UI/Modal';
import { currencyFormatter } from '../util/formatting';
import Input from './UI/Input';

export default function Checkout() {
    const userProgressCtx = useContext(UserProgressContext);
    const cartCtx = useContext(CartContext)

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0
    )
    
    function handleClose(){
        userProgressCtx.hideCheckout();
    }
    

    function handleSubmit(event){
        event.preventDefault();

       const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries())
        
    }
    
    
    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
          <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
    
            <Input label="Full Name" type="text" id="full-name" />
            <Input label="E-Mail Address" type="email" id="email" />
            <Input label="Street" type="text" id="street" />
            <div className="control-row">
              <Input label="Postal Code" type="text" id="postal-code" />
              <Input label="City" type="text" id="city" />
            </div>
    
            <p className="modal-actions">
              <Button type="button" textOnly onClick={handleClose}>
                Close
              </Button>
              <Button>Submit Order</Button>
            </p>
          </form>
        </Modal>
      );
}
