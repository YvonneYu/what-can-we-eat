import * as types from '../constants/ActionTypes';
import uuid from 'uuid/v4';
import { fetchRestListFromApi, saveRestListToApi } from "../api/restaurantStorage";

const fetchRestList = (callback=()=>{}) => {
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

const dispatchAndFetchNewRestList = (actionType, callback=()=>{}) => {
  return (dispatch, getState ) => {
    // fetch list before callback
    return dispatch(getRestListIfNeed( () => {
      dispatch(actionType);
      dispatch(saveRestList(getState().restaurantList.restList));
      callback();
    }));
  };
};

/*
* action creator
* */
export const addRest = (rest, history) => {
  return dispatchAndFetchNewRestList(
    { type: types.ADD_REST, rest: {...rest, id: uuid()} },
    () => {
      history.push('/');
    });
};

export const editRest = (id, rest, history) => {
  return dispatchAndFetchNewRestList(
    { type: types.EDIT_REST, rest: {...rest, id} },
    () => {
      history.push('/');
    });
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


export const setRestList = (list) => (
  { type: types.SET_REST_LIST, list }
);

export const getRestListIfNeed = (callback=()=>{}) => {
  return (dispatch) => {
    return dispatch(fetchRestList( (list) => {
      dispatch(setRestList(list));
      callback();
    }))
  }
};

export const findRestInServer = (id) => {
  return (dispatch) => {
    return dispatch(fetchRestList( (list) => {
      let rest = list.find((temp) => {
        return temp.id === id;
      });
      dispatch(mapChoicesInputsFromRest(rest));
    }))
  }
};

export const mapChoicesInputsFromRest = (rest) => (
  { type: types.MAP_CHOICES_INPUTS, rest}
);

export const filterRestList = (choices) => {
  return dispatchAndFetchNewRestList({ type: types.FILTER_REST_LIST, choices });
};

export const setLoading = (isLoading) => (
  { type:types.SET_LOADING, isLoading }
);