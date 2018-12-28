import * as types from '../constants/actionTypes';

export function addPizza() {
  return {
    type: types.ADD_PIZZA
  };
}

export function setSize(id, size) {
  return {
    type: types.SET_SIZE,
    id,
    size
  };
}

export function toggleTopping(id, topping) {
  return {
    type: types.TOGGLE_TOPPING,
    id,
    topping
  };
}
