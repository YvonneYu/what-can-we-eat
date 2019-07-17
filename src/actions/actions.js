import * as types from '../constants/ActionTypes';
import uuid from 'uuid/v4';
import { fetchRestListFromApi, saveRestListToApi } from "../api/restaurantStorage";

const fetchRestList = (callback) => {
  return dispatch => {
    dispatch(setLoading(true));
    fetchRestListFromApi((list = []) => {
      callback(list);
      dispatch(setLoading(false));
    });
  }
};

const saveRestList = (list, callback=()=>{}) => {
  return dispatch => {
    dispatch(setLoading(true));
    saveRestListToApi(list, () => {
      dispatch(setLoading(false));
      callback();
    });
  }
};

/*
* action creator
* */
export const addRest = rest => {
  return (dispatch, getState ) => {
    dispatch({ type: types.ADD_REST, rest: {...rest, id: uuid()} });
    return dispatch(saveRestList(getState().restaurantList.restList));
  };
};

export const editRest = (id, rest) => {
  return (dispatch, getState ) => {
    dispatch({ type: types.EDIT_REST, rest: {...rest, id} });
    return dispatch(saveRestList(getState().restaurantList.restList));
  };
};

export const deleteRest = id => {
  return (dispatch, getState ) => {
      dispatch({ type: types.DELETE_REST, id });
      return dispatch(saveRestList(getState().restaurantList.restList));
  };
};

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

export const getRestListIfNeed = () => {
  return (dispatch) => {
    return dispatch(fetchRestList( (list) => {
      dispatch(setRestList(list));
    }))
  }
};

export const filterRestList = (choices) => (
  { type: types.FILTER_REST_LIST, choices }
);


export const setLoading = (isLoading) => (
  { type:types.SET_LOADING, isLoading }
);