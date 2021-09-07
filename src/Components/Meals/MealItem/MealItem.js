import React,{useContext} from 'react';
import MealItemForm from './MealItemForm';
import {Context as CartContext} from '../../../Store/CartContext';  
import './MealItem.css';

const MealItem = (props) =>{
    const price = `$${props.price.toFixed(2)}`
    const {addItem} = useContext(CartContext);
    const addToCartHandler = amount =>{
        addItem({id:props.id,name:props.name,amount:amount,price:props.price})
    }

    return(
        <li className="meal">
            <div>
                <h3>{props.name}</h3>
                <div className="description">{props.description}</div>
                <div className="price">{price}</div>
            </div>
            <div>
            <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
            </div>
        </li>
    );
};
export default MealItem;