import * as types from '../constants/ActionTypes';
import uuid from 'uuid/v4';


const fetchRestList = () => {
  return dispatch => {
    setTimeout(() => {
      let json = localStorage.getItem('MY-REST-LIST');
      let list = json && JSON.parse(json);
      dispatch(setRestList(list === null ? []:list));
      dispatch(setLoading(false));
    }, 1000);
  }
};

/*
* action creator
* */
export const addRest = rest => (
  { type: types.ADD_REST, rest: {...rest, id: uuid()} }
);

export const editRest = (id, rest) => (
  { type: types.EDIT_REST, rest: {...rest, id} }
);

export const deleteRest = id => (
  { type: types.DELETE_REST, id }
);

export const setChoices = choices => (
  { type: types.SET_CHOICES, choices }
);

export const setRestInputValues = info => (
  { type: types.SET_REST_INPUT_VALUES, restInfo: info }
);

export const resetChoices = () => (
  { type: types.RESET_ALL_CHOICES}
);

export const mapChoicesInputsFromRest = (rest) => (
  { type: types.MAP_CHOICES_INPUTS, rest}
);

export const setRestList = (list) => (
  { type: types.SET_REST_LIST, list }
);

export const saveRestList = list => (
  { type: types.SAVE_REST_LIST, list }
);

export const getRestListIfNeed = () => {
  return (dispatch, getState) => {
    return dispatch(fetchRestList())
  }
};

export const filterRestList = (choices) => (
  { type: types.FILTER_REST_LIST, choices }
);


export const setLoading = (isLoading) => (
  { type:types.SET_LOADING, isLoading }
);