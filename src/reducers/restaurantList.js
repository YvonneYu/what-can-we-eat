import { ADD_REST, DELETE_REST, FIND_REST } from '../constants/ActionTypes';

const initialState = [];

let restaurant = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REST:
      return [
        ...state,
        {
          id: action.rest.id,
          name: action.rest.name,
          tel: action.rest.tel,
          address: action.rest.address,
          choices: action.rest.choices
        }
      ];
    case DELETE_REST:
      return state.filter(res =>
        res.id !== action.id
      );
    case FIND_REST:
      return state.find( res =>
        res.id === action.id
      );
    default:
      return state;
  }
};

export default restaurant;