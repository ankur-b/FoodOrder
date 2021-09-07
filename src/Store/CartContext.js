import CreateDataContext from "./CreateDataContext";

const CartReducer = (state,action) =>{
    switch(action.type){
        case "ADD_CART_ITEM":{
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
            const existingCartItemIndex = state.items.findIndex(item=>item.id===action.item.id);
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            if(existingCartItem){
                const updatedItem={
                    ...existingCartItem,
                    amount:existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items]; 
                updatedItems[existingCartItemIndex] = updatedItem;
            }else{
                updatedItems = state.items.concat(action.item);
            }
            return {items:updatedItems,totalAmount:updatedTotalAmount}
        }
        case "REMOVE_CART_ITEM":{
            const existingCartItemIndex = state.items.findIndex(item=>item.id===action.id)
            const existingCartItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingCartItem.price;
            let updatedItems
            if(existingCartItem.amount === 1){
                updatedItems = state.items.filter(item=>item.id!==action.id)
            }else{
                const updatedItem = {...existingCartItem,amount:existingCartItem.amount-1}
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {items:updatedItems,totalAmount:updatedTotalAmount}
        }
        default:
            return state
    }
}
const addItem = dispatch => (item) =>{
    dispatch({type:'ADD_CART_ITEM',item:item})
}
const removeItem = dispatch => (id) =>{
    dispatch({type:'REMOVE_CART_ITEM',id:id})
}
export const {Provider,Context} = CreateDataContext(
    CartReducer,
    {addItem,removeItem},
    {items:[],totalAmount:0}
)