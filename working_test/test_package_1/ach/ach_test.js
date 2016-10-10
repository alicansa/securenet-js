'use strict';

var expect = require('chai').expect; //http://chaijs.com/api/assert/
var async = require('async');
var SecureNet = require('../../index');
var dataAPI = require('./ach_data');
var api;

var cases = dataAPI.getAllCases();
// var cases = dataAPI.getSections(["Authorization Only"]);

var results = {};

describe("ACH Script", function(){

	before(function () {

		var config = {
		    credentials: {
		        secureNetId: '8007214', //provided via signup email 
		        secureNetKey: '1mKaP3lwc2dF' //provided inside virtual terminal 
		    },
		    developerApplication: {
		        developerId: 10000688, // provided by SecureNet after certification 
		        version: '1.2'
		    },
		    mode: 'test' //live or test 
		};

		api = new SecureNet(config);

	});

	var keys = Object.keys(cases);

	keys.forEach(function(key){
		describe(key, function () {
			async.each(cases[key],function(item){
				it("case " + item.id + " type: " + item.transactionType,function(done){
					
					if (item.dataResultRef){
						item.data[item.dataResultRef.dataId] = results[item.dataResultRef.caseId][item.dataResultRef.dataId];
					}

					api[item.apiCall](item.data,function(err,response){
						//add the result
						results[item.id] = {
							transactionId :	response.transaction.transactionId,
							responseDateTime : response.responseDateTime
						}
						//expectations
						// if (item.expected.transaction) {
						// 	expect(response.transaction.cardCodeResult).to.equal(item.expected.transaction.cardCodeResult);
						// 	expect(response.transaction.avsResult).to.equal(item.expected.transaction.avsResult);
						// }
						if (item.expected.result) expect(response.result).to.equal(item.expected.result);

						done();
						if (keys.indexOf(key) == keys.length-1 && cases[key].indexOf(item) == cases[key].length-1){
							console.log("\r\n Here are the results: \r\n");
							console.log(results);
							console.log("\r\n");
						}


					})
				});

			});
		});
	});

});



