import {INCREASE,DECREASE,RANDOM,RESET,CHANGE_NAME,REMOVE,CLEAR_CART,GET_AMOUNT,GET_TOTAL} from './actions';

const initialStore = {
    count: 0,
    name: 'john'
};

  
function reducer(state,action)
{
  let tempCart = [];
  switch(action.type)
  {    
    case DECREASE:    
    let item = state.cart.find((item)=>item.id === action.payload.id); 
    if(item.amount === 1)
    {
      tempCart = state.cart.filter(cartItem=>cartItem.id !== item.id);
      
    }else{
        tempCart = state.cart.map((cartItem)=>{
        if(cartItem.id === action.payload.id)
        {
          return {...cartItem,amount: cartItem.amount - 1};        
        }
        return cartItem;
      });
    }

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
    default:
      return state;
  }   
}

export default reducer;