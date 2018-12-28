import * as ActionTypes from '../../constants/actionTypes';
import reducer from '../pizzaReducer';

describe('Pizza reducer', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };

    expect(reducer(undefined, action)).toEqual([]);
  });

  it('should handle ADD_PIZZA', () => {
    const action = { type: ActionTypes.ADD_PIZZA };

    const state = reducer([], action);
    expect(state.length).toEqual(1);
  });

  it('should handle SET_SIZE', () => {
    let action = { type: ActionTypes.ADD_PIZZA };

    let state = reducer([], action);

    const someSize = 'some size';
    action = { type: ActionTypes.SET_SIZE, size: someSize, id: state[0].id };

    state = reducer(state, action);
    expect(state[0].size).toEqual(someSize);
  });
  it('should handle TOGGLE_TOPPING', () => {
    let action = { type: ActionTypes.ADD_PIZZA };

    let state = reducer([], action);

    const someTopping = 'some topping';
    action = { type: ActionTypes.TOGGLE_TOPPING, topping: someTopping, id: state[0].id };

    state = reducer(state, action);
    expect(state[0].toppings.includes(someTopping)).toEqual(true);
  });
});
