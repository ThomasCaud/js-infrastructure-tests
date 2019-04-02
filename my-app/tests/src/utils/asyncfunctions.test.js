import * as asyncfunctions from '../../../src/utils/asyncfunctions';
import { expect } from 'chai';
import 'mocha';
import sinon from 'sinon';

// asynx/await test when each step is done sequentially
describe('msgSequentially function (async)', () => {
	it("should return 'He is there'", async () => {
		const result = await asyncfunctions.msgSequentially();
		expect(result).to.equal('He is there');
	});
});

// asynx/await test when steps are done in parallel
describe('msgInParallel function (async)', () => {
	it("should return 'He is there'", async () => {
		const result = await asyncfunctions.msgInParallel();
		expect(result).to.equal('He is there');
	});

	it("should return 'She is there' (mock example)", async () => {
		// See https://codeburst.io/stub-dependencies-with-sinon-js-259ac12379b9
		sinon.stub(asyncfunctions, 'who').callsFake(() => {
			return "She";
		});

		const result = await asyncfunctions.msgInParallel();
		expect(result).to.equal('She is there');
	});
});