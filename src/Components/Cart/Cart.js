import React,{useContext} from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { Context as CartContext } from '../../Store/CartContext';
import './Cart.css'
const Cart = (props) =>{
    const {state,addItem,removeItem} = useContext(CartContext);
    const totalAmount = state.totalAmount.toFixed(2);
    const hasItems = state.items.length > 0;
    const cartItemRemoveHandler = (id) =>{
        removeItem(id)
    }
    const cartItemAddHandler = (item) =>{
        addItem(item)
    }
    const cartItems = state.items.map(item=><CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>)
    return(
        <Modal onClose={props.onClose}>
            <ul className="cart-items">
            {cartItems}
            </ul>
            <div className="total">
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className="actions">
                <button className="buttonalt" onClick={props.onClose}>Close</button>
                {hasItems && <button className="button" >Order</button>}
            </div>
        </Modal>
    )
};
export default Cart;