import { msgSequentially, msgInParallel } from '../../../src/utils/asyncfunctions';
import { expect } from 'chai';
import 'mocha';

// asynx/await test when each step is done sequentially
describe('msgSequentially function (async)', () => {
	it("should return 'He is there'", async () => {
		const result = await msgSequentially();
		expect(result).to.equal('He is there');
	});
});

// asynx/await test when steps are done in parallel
describe('msgInParallel function (async)', () => {
	it("should return 'He is there'", async () => {
		const result = await msgInParallel();
		expect(result).to.equal('He is there');
	});
});

// todo test with mock ?