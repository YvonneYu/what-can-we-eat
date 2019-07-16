import { combineReducers } from 'redux';
import choicesPanel from './choicesPanel';
import restaurantList from './restaurantList';

const rootReducer = combineReducers({
  choicesPanel,
  restaurantList
});

export default rootReducer;