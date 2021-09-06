import React,{useState} from 'react';
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart'
const App = ()=>{
  const [cartIsShown,setCartIsShown] = useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals/>
    </div>
  );
}

export default App;
