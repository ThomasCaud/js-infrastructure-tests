import { pow, add, add_beta } from '../../../src/utils/Operationsjs';
import { expect } from 'chai';
import 'mocha';

describe('pow function', () => {
	it('should return 5', () => {
		const result = pow(4,7);
		expect(result).to.equal(16384);
	});
});

describe('async add function', () => {
  it('2 + 2 is 4', async () => {
    const p = await add(2, 2)
    expect(p).to.equal(4);
  });

  it('3 + 3 is 6', async () => {
    const p = await add(3, 3)
    expect(p).to.equal(6);
  });
});
