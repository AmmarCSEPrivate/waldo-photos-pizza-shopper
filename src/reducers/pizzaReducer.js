import { ADD_PIZZA, SET_SIZE, TOGGLE_TOPPING } from '../constants/actionTypes';

let id = 0;

export default function pizzaReducer(state = [], action) {
  switch (action.type) {
    case ADD_PIZZA:
      return [
        ...state,
        {
          id:++id,
          size: null,
          toppings: []
        }
      ]
    case SET_SIZE:
      return [
        ...state.filter(pizza => pizza.id != action.id),
        {
          ...state.find(pizza => pizza.id == action.id),
          size:action.size,
          toppings: []
        }
      ]
    case TOGGLE_TOPPING:
      let pizza = state.find(pizza => pizza.id == action.id);
      return [
        ...state.filter(pizza => pizza.id != action.id),
        {
          ...pizza,
          toppings: pizza.toppings.includes(action.topping) ? 
              pizza.toppings.filter(topping => topping != action.topping)
              : [...pizza.toppings, action.topping]
        }
      ]
    default:
      return state
  }
}
