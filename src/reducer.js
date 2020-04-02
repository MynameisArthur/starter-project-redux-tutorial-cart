import {INCREASE,DECREASE,RANDOM,RESET,CHANGE_NAME,REMOVE,CLEAR_CART,TOGGLE_AMOUNT,GET_TOTALS} from './actions';
import cartItems from './cart-items';
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
};
  
function reducer(state = initialStore,action)
{
  let tempCart = [];
  switch(action.type)
  {    
    case DECREASE: 
      tempCart = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload.id)
            {
              return {...cartItem,amount: cartItem.amount - 1};        
            }
            return cartItem;
        });
      return {
        ...state,
        cart: tempCart
      };     
    case INCREASE:      
      tempCart = state.cart.map((cartItem)=>{
        if(cartItem.id === action.payload.id)         
        {
          cartItem = {...cartItem,amount: cartItem.amount + 1};
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart
      };
    case REMOVE:        
      return {
        ...state,
        cart: state.cart.filter(cartItem=>cartItem.id !== action.payload.id)
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    case GET_TOTALS:
      let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
        const {price,amount} = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },{total: 0,amount: 0});
      total = parseFloat(total.toFixed(2));
      return {
        ...state,  
        total,
        amount      
      };
    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map(cartItem=>{
          if(cartItem.id === action.payload.id)
          {
            if(action.payload.toggle === 'inc')
            {
              return cartItem = {...cartItem, amount: cartItem.amount + 1};
            }
            if(action.payload.toggle === 'dec')
            {
              return cartItem = {...cartItem, amount: cartItem.amount - 1};              
            }
          }
          return cartItem;
        })
      };
    default:
      return state;
  }   
}

export default reducer;