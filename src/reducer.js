import {INCREASE,DECREASE,RANDOM,RESET,CHANGE_NAME,REMOVE,CLEAR_CART,GET_AMOUNT,GET_TOTAL} from './actions';

const initialStore = {
    count: 0,
    name: 'john'
};

  
function reducer(state,action)
{
  console.log({state,action});
  if(action.type === DECREASE)
  {
    return {
      ...state,
      count: state.count - 1
    };
  }
  if(action.type === INCREASE)
  {
    return {
      ...state,
      count: state.count + 1
    };
  }
  return state;
}

export default reducer;