import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const SizePicker = ({pizzaSizes, selectSizeHandler, selectedSize}) => {
  //unique id for radio boxes
  const uniqueId = uniqid();

  return (
    <div>
      {
        pizzaSizes.map(pizzaSize => <label key={pizzaSize.name}>
            <input type="radio" name={`${uniqueId}size`} onChange={()=>selectSizeHandler(pizzaSize)} checked={selectedSize == pizzaSize}/>
            {pizzaSize.name}(max toppings: {pizzaSize.maxToppings || 'unlimited'})
          </label>)
      }
    </div>
  );
};

SizePicker.propTypes = {
  pizzaSizes: PropTypes.array.isRequired,
  selectSizeHandler: PropTypes.func.isRequired,
  selectedSize: PropTypes.object,
};

export default SizePicker;
