import * as actionTypes from '../constants/ActionTypes';

// use fake one now
const initialState = {
  isLoading: false,
  restList: []
};

const getSingleServiceRest = (rest) => {
  return {
    id: rest.id,
    name: rest.name,
    tel: rest.tel,
    address: rest.address,
    choices: rest.choices
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_REST:
    return {...state, restList: [...state, getSingleServiceRest(action.rest)]};
    case actionTypes.EDIT_REST:
      return {...state, restList: state.restList.map((tempRest)=> {
        return (action.rest.id === tempRest.id ? getSingleServiceRest(action.rest) : tempRest);
      })};
    case actionTypes.DELETE_REST:
      return {...state, restList: state.restList.filter(res =>
          res.id !== action.id
        )};
    case actionTypes.GET_REST_LIST:
      return state;
    case actionTypes.SET_REST_LIST:
      return {...state, restList: action.list};
    case actionTypes.FILTER_REST_LIST:
      return {...state, restList: state.filter(res => {
          // if res choice is empty, default in the list
          if (res.choices.length === 0) return true;
          // return list if this res match one of choices
          res.choices.forEach( choice => {
            return action.choices.has(choice);
          });
        })};
    case actionTypes.SET_LOADING:
        return {...state, isLoading: action.isLoading};
    default:
      return state;
  }
};