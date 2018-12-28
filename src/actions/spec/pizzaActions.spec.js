import * as ActionTypes from '../../constants/actionTypes';
import * as ActionCreators from '../pizzaActions';

describe('Actions', () => {
  it('should create an action to add pizza', () => {
    const actual = ActionCreators.addPizza();
    const expected = {
      type: ActionTypes.ADD_PIZZA
    };

    expect(actual).toEqual(expected);
  });
  it('should create an action to set pizza size', () => {
    const someId = 'some id';
    const someSize = 'some size';
    const actual = ActionCreators.setSize(someId, someSize);
    const expected = {
      type: ActionTypes.SET_SIZE,
      id: someId,
      size: someSize
    };

    expect(actual).toEqual(expected);
  });
  it('should create an action to toggle pizza topping', () => {
    const someId = 'some id';
    const someTopping = 'some topping';
    const actual = ActionCreators.toggleTopping(someId, someTopping);
    const expected = {
      type: ActionTypes.TOGGLE_TOPPING,
      id: someId,
      topping: someTopping
    };

    expect(actual).toEqual(expected);
  });
});
