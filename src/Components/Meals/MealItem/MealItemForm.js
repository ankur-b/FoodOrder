import React,{useState} from 'react';
import Input from '../../UI/Input'
import './MealItemForm.css';
const MealItemForm = props =>{
    const [amountIsValid,setAmountIsValid] = useState(true)
    const [enteredAmount,setEnteredAmount] = useState(1)
    const submitHandler = event =>{
        event.preventDefault()
        if(enteredAmount<1 || enteredAmount>5){
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(Number(enteredAmount))
    }
    const amountHandler =(event)=>{
        setEnteredAmount(event.target.value)
    }
    return(
        <form className="form" onSubmit={submitHandler}>
            <Input label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type:'number',
                    min:'1',
                    max:'5',
                    step:'1',
                    value:enteredAmount,
                    onChange:amountHandler,
                    defaultValue:'1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}
export default MealItemForm;