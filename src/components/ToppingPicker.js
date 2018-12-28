import React from 'react';
import PropTypes from 'prop-types';

const ToppingPicker = ({toppings, toggleToppingHandler, selectedToppings, maxToppings}) => {
  return (
    <div>
      {
        toppings.map(pizzaTopping => <label key={pizzaTopping.topping.name}>
            <input 
              type="checkbox" 
              onChange={()=>toggleToppingHandler(pizzaTopping.topping)} 
              checked={selectedToppings.includes(pizzaTopping.topping)}
              disabled={!selectedToppings.includes(pizzaTopping.topping) && selectedToppings.length == maxToppings}/>
            {pizzaTopping.topping.name}(${pizzaTopping.topping.price})
          </label>)
      }
      {selectedToppings.length >= maxToppings && <div className="maximum-toppings-reached">Maximum toppings selected</div>}
    </div>
  );
};

ToppingPicker.propTypes = {
  toppings: PropTypes.array.isRequired,
  toggleToppingHandler: PropTypes.func.isRequired,
  selectedToppings: PropTypes.array,
  maxToppings: PropTypes.number,
};

export default ToppingPicker;
