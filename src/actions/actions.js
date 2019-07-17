import * as types from '../constants/ActionTypes';
import uuid from 'uuid/v4';
import { fetchRestListFromApi, saveRestListToApi } from "../api/restaurantStorage";

const fetchRestList = (callback) => {
  return dispatch => {
    fetchRestListFromApi((list = []) => {
      callback(list);
      dispatch(setLoading(false));
    });
  }
};

const saveRestList = (list, callback) => {
  return dispatch => {
    saveRestListToApi(list, () => {
      callback();
      dispatch(setLoading(false));
    });
  }
};

const getDispatchWithSaveRestList = (callback) => {
  return (dispatch, getState) => {
    return saveRestList(getState().restaurantList.restList, ()=> { callback(dispatch) });
  };
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

export const deleteRest = id => {
  return { type: types.DELETE_REST, id };
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