import React from 'react';
import CartButton from './CartButton';
import mealsImg from '../../Assets/meals.jpg';
import './Header.css'
const Header = (props) =>{
    return(
        <>
        <header className="header">
            <h1>ReactMeals</h1>
            <CartButton onClick={props.onShowCart}/>
        </header>
        <div className="main-image">
            <img src={mealsImg} alt="A table full of delicious food!"/>
        </div>
        </>
    )
}
export default Header;