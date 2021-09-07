import React,{useContext,useEffect,useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import {Context as CartContext} from '../../Store/CartContext';
import './CartButton.css';
const CartButton = props =>{
    const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
    const {state} = useContext(CartContext);
    const {items} = state;
    const numberOfCartItems = items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0);
    const btnClasses = `button ${btnIsHighlighted ?'bump':''}`;
    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setBtnIsHighlighted(true)
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false)
        },300)
        return ()=>{
            clearTimeout(timer)
        }
    },[items])
    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className="icon">
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className="badge">
                {numberOfCartItems}
            </span>
        </button>
    )
}
export default CartButton;