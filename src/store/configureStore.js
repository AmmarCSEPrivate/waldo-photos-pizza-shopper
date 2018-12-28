import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';

import pizzas from '../reducers/pizzaReducer';

export default function configureStore(){
  const store = createStore(
    combineReducers({pizzas}),
  );

  return store;
}
