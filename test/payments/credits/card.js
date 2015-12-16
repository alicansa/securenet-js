'use strict';

var _ = require('lodash');
var assert = require('chai').assert; //http://chaijs.com/api/assert/
var SecureNet = require('../../../index');
var example = require('../../support/data');
var api, customerId, paymentMethodId;

describe('Payments/credit (forced/unlinked) credit to card', function() {

	//set the timeout
	this.timeout(15000);

	beforeEach(function() {
		api = new SecureNet(example.config);
	});

	it('give cash to online card data', function(next) {

		var params = {
			amount: 1.05,
			card: example.card
		};

		api.credit(params, function(err, res) {
			if (err) return next(err);

			//console.log('res', res);

			//confirm response
			assert.typeOf(res, 'object');
			assert.notOk(res.success);
			assert.equal(res.message, 'UNLINKED CREDIT NOT ENABLED FOR THE MERCHANT');

			//setup for next test

			next();
		});
	});
});


