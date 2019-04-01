import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Pow from '../../../src/components/Pow';

describe('<Pow />', () => {
	it('state should be composed of 2 elements', () => {
		const wrapper = mount(<Pow />);
    	expect(wrapper.state.length == 2);
    });
});