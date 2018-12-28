import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import sinon from 'sinon';

import  ToppingPicker from '../ToppingPicker';

configure({ adapter: new Adapter() });

const expect = chai.expect;

describe('Topping picker component', () => {
  const pizzaToppings = [
        {
          "topping": {
            "name": "pepperoni",
            "price": 0.4
          }
        },
        {
          "topping": {
            "name": "bannana peps",
            "price": 0.89
          }
        },
        {
          "topping": {
            "name": "sausage",
            "price": 1.29
          }
        },
        {
          "topping": {
            "name": "onion",
            "price": 0.29
          }
        },
        {
          "topping": {
            "name": "green olives",
            "price": 0.39
          }
        },
        {
          "topping": {
            "name": "cheese",
            "price": 0.1
          }
        },
        {
          "topping": {
            "name": "bell peps",
            "price": 0.22
          }
        }
      ];

  function setup(params) {
    const props = {
      ...params,
    };
    return mount(<ToppingPicker {...props} />);
  }

  describe('Rendering pizza toppings', () => {
    it('should render passed in pizza toppings and price for each', () => {
      const component = setup({toppings: pizzaToppings, toggleToppingHandler: sinon.spy(), selectedToppings:[]});
      const content = component.html();

      for(const toppingItem of pizzaToppings){
        expect(content).to.include(toppingItem.topping.name);
        expect(content).to.include(toppingItem.topping.price);
      }
    });
  });
  it('should call select size handler when radio button is clicked', () => {
    const toggleToppingHandler = sinon.spy();
    const component = setup({ toppings: pizzaToppings, toggleToppingHandler, selectedToppings:[] });
    const btnToggleTopping = component.find('input[type="checkbox"]').first();

    btnToggleTopping.simulate('change', {target: {value: pizzaToppings[0].topping.name}});
    expect(toggleToppingHandler.calledOnce).to.equal(true);
  });
});
