import { combineReducers } from 'redux';
import ColorReducer from './reducer_color';

const rootReducer = combineReducers({
  colors: ColorReducer
});

export default rootReducer;
