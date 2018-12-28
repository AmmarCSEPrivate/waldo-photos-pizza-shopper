import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from './actions/pizzaActions';
import {getPizzaPrice, getPizzas} from './selectors/pizzaSelectors';
import PizzaOrderForm from './components/containers/PizzaOrderForm';

import './App.css';

class App extends React.Component {
  addPizza = () => {
    this.props.actions.addPizza();
  }
  render() {
    const {pizzas} = this.props;
    return (
      <div>
        {pizzas.sort((a,b)=>a.id-b.id).map(pizza => <PizzaOrderForm key={pizza.id} pizza={pizza} />)}
        <div className="footer">
          <button className="btn-add-pizza" onClick={this.addPizza}>Add Pizza</button>
          <div>Price: { `$${pizzas.reduce((sum, pizza) => sum + getPizzaPrice(pizza), 0.00).toFixed(2)}` }</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pizzas: getPizzas(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
