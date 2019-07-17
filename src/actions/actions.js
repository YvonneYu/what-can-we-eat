import * as types from '../constants/ActionTypes';
import uuid from 'uuid/v4';

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