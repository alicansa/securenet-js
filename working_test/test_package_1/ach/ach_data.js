var cases = {

	//---- AUTHORIZATION ONLY --- //
	'Authorization-Capture' : [

		//CASE 1.1
		{
			id : '1.1',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 11.00,
			  check: {
			    firstName: "Jack",
			    lastName: "Sparrow",
			    accountType: 'SAVINGS',
			    checkType : "WEB_INITIATED",
			    routingNumber: 222371863,
			    accountNumber: 147852
			  }
			}
		},

		//CASE 1.2
		{
			id : '1.2',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'DECLINE',
				transaction : null
			},
			data : {
				amount: 21.00,
			  check: {
			    firstName: "Hans",
			    lastName: "Solo",
			    accountType: 'CHECKING',
			    checkType : "WEB_INITIATED",
			    routingNumber: 222371863,
			    accountNumber: 1477895
			  }
			}
		},

		//CASE 1.3
		{
			id : '1.3',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 11.00,
			  check: {
			    firstName: "James",
			    lastName: "Kirk",
			    accountType: 'CHECKING',
			    checkType : "TELEPHONE_INITIATED",
			    routingNumber: 222371863,
			    accountNumber: 1477895
			  }
			}
		}
	],

	//---- VOID --- //
	'Void' : [

		//CASE 2.1
		{
			id : '2.1',
			apiCall : 'void',
			transactionType : 'Void',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '1.1',
				dataId : 'transactionId' 
			},
			data : {
				amount: 11.00,
			  check: {
			    firstName: null,
			    lastName: null,
			    accountType: 'SAVINGS',
			    checkType : "WEB_INITIATED",
			    routingNumber: 222371863,
			    accountNumber: 147852
			  }
			}
		}
	],

	//---- REFUND OR CREDIT --- //
	'Refund or Credit' : [

		//CASE 3.1
		{
			id : '3.1',
			apiCall : 'refund',
			transactionType : 'Refund',
			dataResultRef : {
				caseId : '1.3',
				dataId : 'transactionId' 
			},
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 11.00,
			  check: {
			    firstName: null,
			    lastName: null,
			    accountType: 'CHECKING',
			    checkType : "PREARRANGED_PAYMENT_OR_DEPOSIT",
			    routingNumber: 222371863,
			    accountNumber: 147852
			  }
			}
		}
	]
}

module.exports = {

	getCases : function(id){
		//id is an array

		if (id){
			id = Array.isArray(id) ? id : [id];
			var result = [];

			for(var i=0;i<id.length;i++){
				Object.keys(cases).forEach(function(key){
					result[key].push(cases[key].find(function(item){
						return item.id === id[i];
					}));
				});
			}

			return result;

		}else return null;
	},

	getSections : function(sectionNames){
		//sectionNames is an array
		if (sectionNames){

			sectionNames = Array.isArray(sectionNames) ? sectionNames : [sectionNames];

			var results = {};
			for (var i=0;i<sectionNames.length;i++){
				results[sectionNames[i]] = cases[sectionNames[i]];
			}

			return results;

		}else return null;

	},

	getAllCases : function(){
		return cases;
	}




}