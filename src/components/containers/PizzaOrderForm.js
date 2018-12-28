import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import gql from 'graphql-tag';

import * as actions from '../../actions/pizzaActions';
import withQuery from '../WithQuery';
import SizePicker from '../SizePicker';
import ToppingPicker from '../ToppingPicker';
import {getPizzaPrice} from '../../selectors/pizzaSelectors';

const GET_PIZZA_SIZES = ()=> gql`
  {
    pizzaSizes{
      name
      maxToppings
      basePrice
    }
  }
`;

const GET_PIZZA_TOPPINGS = size => gql`
{
  pizzaSizeByName(name:${size}){
    toppings{
      topping{
        name
        price
      }
    }
  }
}
`;

class PizzaOrderForm extends React.Component {
  selectSize = size => {
    this.props.actions.setSize(this.props.pizza.id, size);
  }

  toggleTopping = topping => {
    this.props.actions.toggleTopping(this.props.pizza.id, topping);
  }
  render() {
    const {pizza} = this.props;

    let sizePickerProps = {
      selectSizeHandler:this.selectSize, 
      selectedSize: pizza.size
    };
    let SizePickerWithQuery = withQuery(SizePicker, GET_PIZZA_SIZES(), ['pizzaSizes'], sizePickerProps);

    let toppingPickerProps;
    let ToppingsPickerWithQuery;
    if(pizza.size){
      toppingPickerProps = {
        toggleToppingHandler: this.toggleTopping, 
        selectedToppings: pizza.toppings, 
        maxToppings: pizza.size.maxToppings || Number.MAX_SAFE_INTEGER
      };
      ToppingsPickerWithQuery = withQuery(ToppingPicker, GET_PIZZA_TOPPINGS(pizza.size.name.toUpperCase()), ['pizzaSizeByName.toppings'], toppingPickerProps);
    }
    return (
      <div className="pizza-form-container">
          <SizePickerWithQuery />
          {pizza.size && <ToppingsPickerWithQuery />}
          <div>Price: { `$${(getPizzaPrice(pizza) || 0.00).toFixed(2)}` }</div>
      </div>
    );
  }
}

PizzaOrderForm.propTypes = {
  pizza: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(PizzaOrderForm);
