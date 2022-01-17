import { combineReducers } from 'redux';
 
const INITIAL_STATE = {
 commoditys:[] 
};


const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'actualizar_commodity':
          return {...state, commoditys: action.payload}
      default:
        return state
    }
  };


export default combineReducers({
    commodity: Reducer,
  });