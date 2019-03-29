import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme()) 

import Pow from '../../../src/components/Pow';

describe('<Pow />', () => {
	it('renders div with class named operation', () => {
		const wrapper = mount(<Pow />);
		expect(wrapper.contains(<div className="operation"/>)).to.equal(true);
	});
});