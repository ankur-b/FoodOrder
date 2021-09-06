import React from 'react';
import Modal from '../UI/Modal';
import './Cart.css'
const Cart = (props) =>{
    const cartItems = [{id:'c1',name:'Sushi',amount:2,price:12.99},{id:'c2',name:'Samosha',amount:3,price:23.99}].map(item=><li>{item.name}</li>)
    return(
        <Modal onClose={props.onClose}>
            <ul className="cart-items">
            {cartItems}
            </ul>
            <div className="total">
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className="actions">
                <button className="buttonalt" onClick={props.onClose}>Close</button>
                <button className="button" >Order</button>
            </div>
        </Modal>
    )
};
export default Cart;