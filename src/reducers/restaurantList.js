import * as actionTypes from '../constants/ActionTypes';
import uuid from "uuid/v4";

// use fake one now
const initialState = {
  isLoading: false,
  restList: [
    {
      id: uuid(),
      name: '麥當勞',
      tel: '',
      choices: ['便宜', '速食', '垃圾食物', '全天', '有外帶']
    },
    {
      id: uuid(),
      name: 'test2 餐廳',
      address: '測試的地址要很長測試的地址要很長',
      choices: []
    },
    {
      id: uuid(),
      name: 'test333333333333 餐廳',
      choices: []
    }
  ]
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
    case actionTypes.SAVE_REST_LIST:
      return state;
    case actionTypes.FILTER_REST_LIST:
      return {...state, restList: state.filter(res => {
          // if res choice is empty, default in the list
          if (res.choices.length === 0) return true;
          // return list if this res match one of choices
          res.choices.forEach( choice => {
            return action.choices.has(choice);
          });
        })};
    default:
      return state;
  }
};