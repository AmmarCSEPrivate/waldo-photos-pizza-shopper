import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import sinon from 'sinon';

import SizePicker from '../SizePicker';

configure({ adapter: new Adapter() });

const expect = chai.expect;

describe('Size picker component', () => {
  const pizzaSizes = [
      {
        "name":"small",
        "maxToppings":3
      },
      {
        "name":"medium",
        "maxToppings":5
      },
      {
        "name":"large",
        "maxToppings":null
      }
    ];

  function setup(params) {
    const props = {
      ...params,
    };
    return mount(<SizePicker {...props} />);
  }

  describe('Rendering pizza sizes', () => {
    it('should render passed in pizza sizes and max toppings for each', () => {
      const component = setup({pizzaSizes, selectSizeHandler: sinon.spy() });
      const content = component.html();

      for(const pizzaSize of pizzaSizes){
        expect(content).to.include(pizzaSize.name);
        expect(content).to.include(`(max toppings: ${pizzaSize.maxToppings || 'unlimited'})`);
      }
    });
  });

  it('should call select size handler when radio button is clicked', () => {
    const selectSizeHandler = sinon.spy();
    const component = setup({ pizzaSizes, selectSizeHandler });
    const btnSelectSize = component.find('input[type="radio"]').first();

    btnSelectSize.simulate('change', {target: {value: pizzaSizes[0].name}});
    expect(selectSizeHandler.calledOnce).to.equal(true);
  });
});
