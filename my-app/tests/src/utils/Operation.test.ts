import { add, substract, multiply } from '../../../src/utils/Operations';
import { expect } from 'chai';
import 'mocha';

describe('add function', () => {
	it('should return 5', () => {
		const result = add(3,2);
		expect(result).to.equal(5);
	});
});

describe('substract function', () => {
	it('should return 1', () => {
		const result = substract(3,2);
		expect(result).to.equal(1);
	});
});

describe('multiply function', () => {
	it('should return 30 (and failed because TDD ; function is not implemented yet)', () => {
		const result = multiply(5,6);
		expect(result).to.equal(30);
	});
});