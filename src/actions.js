import * as types from '../constants/ActionTypes';
import uuid from 'uuid/v4';

/*
* action creator
* */
export const addRest = rest => (
  { type: types.ADD_REST, rest: {...rest, id: uuid()} }
);

export const deleteRest = id => (
  { type: types.DELETE_REST, id }
);

export const findRest = id => (
  { type: types.FIND_REST, id }
);

export const saveRestList = list => (
  { type: types.SAVE_REST_LIST, list }
);

export const getRestList = () => (
  { type: types.GET_REST_LIST }
);

export const filterRestList = (choices) => (
  { type: types.FILTER_REST_LIST, choices }
);

export const clearRestList = () => (
  { type: types.CLEAR_REST_LIST }
);
