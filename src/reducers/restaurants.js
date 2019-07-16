import { ADD_REST, DELETE_REST, FIND_REST } from '../constants/ActionTypes';
import uuid from "uuid/v4";

const initialState = [];

let restaurants = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REST:
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          tel: action.tel,
          address: action.address,
          choices: action.choices
        }
      ];
    case DELETE_REST:
      return state.filter(res =>
        res.id !== action.id
      );
    default:
      return state;
  }
};

export default restaurants;