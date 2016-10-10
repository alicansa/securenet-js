var cases = {

	//---- CUSTOMER FUNCTIONS --- //
	'Customer Functions' : [

		//CASE 1.1
		{
			id : '1.1',
			apiCall : 'createCustomer',
			transactionType : 'Create Customer',
			expected : {
				result : 'APPROVED'
			},
			data : {
				firstName: 'John',
			  lastName: 'Smith',
			  address: {
			    line1: '123 Main St.',
			    city: 'Austin',
			    zip: '78727'
			  }	
			}
		},

		//CASE 1.2
		{
			id : '1.2',
			apiCall : 'createCustomer',
			transactionType : 'Create Customer',
			expected : {
				result : 'APPROVED'
			},
			data : {
				firstName: 'Jane',
			  lastName: 'Doe',
			  address: {
			    line1: '123 Billing St.',
			    city: 'Austin',
			    zip: '78727'
			  }	
			}
		},

		//CASE 1.3
		{
			id : '1.3',
			apiCall : 'createCustomer',
			transactionType : 'Create Customer',
			expected : {
				result : 'APPROVED'
			},
			data : {
				firstName: 'Max',
			  lastName: 'Powers',
			  address: {
			    line1: '789 Main St.',
			    city: 'Austin',
			    zip: '78727'
			  }	
			}
		},

		//CASE 1.4
		{
			id : '1.4',
			apiCall : 'updateCustomer',
			transactionType : 'Update Customer',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [{caseId : '1.1', dataId : 'customerId'}],
			data : {
				firstName: 'Jackie',
			  lastName: 'Chan',
			  address: {
			    line1: '123 Broadway',
			    city: 'Rockville',
			    zip: '20850'
			  }	
			}
		}

	],

	//---- ACCOUNT FUNCTIONS --- //
	'Account Functions' : [

		//CASE 2.1
		{
			id : '2.1',
			transactionType : 'Create Account',
			apiCall : 'createCustomerPaymentMethod',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [{caseId : '1.1',dataId : 'customerId'}],
			data : {
				primary : true,
			  card: {
			  	firstName : "Jackie",
			  	lastName : "Chan",
			    number: '4444 3333 2222 1111',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Billing St.',
			      city: 'Rockville',
			      zip: '20850'
			    }
			  }
			}
		},

		//CASE 2.2
		{
			id : '2.2',
			transactionType : 'Create Account',
			apiCall : 'createCustomerPaymentMethod',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [{caseId : '1.2',dataId : 'customerId'}],
			data : {
				primary : true,
			  card: {
			  	firstName : "Max",
			  	lastName : "Powers",
			    number: '5424 1802 7979 1732',
			    expirationDate: '12/2016',
			    address: {
			      line1: '789 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  }
			}
		},

		//CASE 2.3
		{
			id : '2.3',
			transactionType : 'Create Account',
			apiCall : 'createCustomerPaymentMethod',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [{caseId : '1.1', dataId : 'customerId'}],
			data : {
				primary : false,
			  card: {
			  	firstName : "John",
			  	lastName : "Smith",
			    number: '6011 0000 0000 0012',
			    expirationDate: '12/2016',
			    address: {
			      line1: '23 Home Blvd',
			      city: 'Austin',
			      zip: '78727'
			    }
			  }
			}
		},

		//CASE 2.4
		{
			id : '2.4',
			transactionType : 'Update Vault Account',
			apiCall : 'updateCustomerPaymentMethod',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [
				{caseId : '2.1', dataId : 'customerId'},
				{caseId : '2.1', dataId : 'paymentMethodId'},
			],
			data : {
				primary : true,
			  card: {
			  	firstName : "Jackie",
			  	lastName : "Chan",
			    number: '5526 3990 0064 8568',
			    expirationDate: '04/2018',
			    address: {
			      line1: '123 Billing St.',
			      city: 'Rockville',
			      zip: '20850'
			    }
			  }
			}
		},

		//CASE 2.6
		{
			id : '2.6',
			transactionType : 'Delete Vault Account',
			apiCall : 'deleteCustomerPaymentMethod',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [
				{caseId : '2.2', dataId : 'customerId'},
				{caseId : '2.2', dataId : 'paymentMethodId'},
			],
			data : {}
		},

	],

	//---- CREATING CUSTOMER AND ACCOUNT --- //
	'Creating Customer and Account' : [

		//CASE 3.1
		{
			id : '3.1',
			transactionType : 'Create Customer and Account',
			apiCall : 'createCustomerAndPaymentMethod',
			expected : {
				result : 'APPROVED'
			},
			data : {
				firstName : "Buddy",
			  lastName : "Holly",
			  address: {
			    line1: '31 Fig Lane',
			    city: 'Somewhere',
			    zip: '12345'
			  },
				primary : true,
			  card: {
			  	firstName : "Buddy",
			  	lastName : "Holly",
			    number: '4444 3333 2222 1111',
			    expirationDate: '12/2016',
			    address: {
			      line1: '31 Fig Lane',
			      city: 'Somewhere',
			      zip: '12345'
			    }
			  }
			}
		},

		//CASE 3.2
		{
			id : '3.2',
			transactionType : 'Create Customer and Account',
			apiCall : 'createCustomerAndPaymentMethod',
			expected : {
				result : 'APPROVED'
			},
			data : {
				firstName : "Elvis",
			  lastName : "Presley",
			  address: {
			      line1: '32 Graceland Dr.',
			      city: 'Austin',
			      zip: '78727'
			  },
				primary : true,
			  card: {
			  	firstName : "Elvis",
			  	lastName : "Presley",
			    number: '5424 1802 7979 1732',
			    expirationDate: '12/2016',
			    address: {
			      line1: '32 Graceland Dr.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  }
			}
		},

		//CASE 3.3
		{
			id : '3.3',
			transactionType : 'Create Customer and Account',
			apiCall : 'createCustomerAndPaymentMethod',
			expected : {
				result : 'APPROVED'
			},
			data : {
				firstName : "Smokey",
			  lastName : "Robinson",
			  address: {
			      line1: '33 Hollywood Blvd',
			      city: 'Somewhere',
			      zip: '12345'
			  },
				primary : true,
			  card: {
			  	firstName : "Smokey",
			  	lastName : "Robinson",
			    number: '6011 0000 0000 0012',
			    expirationDate: '12/2016',
			    address: {
			      line1: '33 Hollywood Blvd',
			      city: 'Somewhere',
			      zip: '12345'
			    }
			  }
			}
		},

		//CASE 3.4
		{
			id : '3.4',
			transactionType : 'Create Customer and Account',
			apiCall : 'createCustomerAndPaymentMethod',
			expected : {
				result : 'APPROVED'
			},
			data : {
				firstName : "Patsy",
			  lastName : "Cline",
			  address: {
			      line1: '34 Nashville St.',
			      city: 'Austin',
			      zip: '78727'
			  },
				primary : true,
			  card: {
			  	firstName : "Patsy",
			  	lastName : "Cline",
			    number: '3411 1159 7241 002',
			    expirationDate: '12/2016',
			    address: {
			      line1: '34 Nashville St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  }
			}
		},

		//CASE 3.10
		{
			id : '3.10',
			transactionType : 'Update Customer and Account',
			apiCall : 'updateCustomerAndPaymentMethod',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [
				{caseId : '3.1', dataId : 'customerId'},
				{caseId : '3.1', dataId : 'paymentMethodId'},
			],
			data : {
				firstName : "Dolly",
			  lastName : "Parton",
			  address: {
			      line1: '31 Guitar Lane',
			      city: 'Rockville',
			      zip: '20850'
			  },
				primary : true,
			  card: {
			  	firstName : "Dolly",
			  	lastName : "Parton",
			    number: '5405 0101 0000 0016',
			    expirationDate: '12/2020',
			    address: {
			      line1: '31 Guitar Lane',
			      city: 'Rockville',
			      zip: '20850'
			    }
			  }
			}
		},

	],

	//---- STORING AN ACCOUNT AFTER CHARGE --- //
	'Storing an Account After Charge' : [
		//CASE 4.1
		{
			id : '4.1',
			transactionType : 'Auth - Add Customer and Account',
			apiCall : 'charge',
			expected : {
				result : 'APPROVED'
			},
			data : {
				firstName : "Ben",
			  lastName : "Franklin",
			  address: {
		      line1: '41 Inventors Way',
		      city: 'Austin',
		      zip: '78727'
			  },
				amount: 10.00,
			  addToVault: true,
			  card: {
			  	firstName : "Ben",
			  	lastName : "Franklin",
			    number: '4275 3300 1234 5675',
			    cvv : "999",
			    expirationDate: '12/2016',
			    address: {
			      line1: '41 Inventors Way',
			      city: 'Austin',
			      zip: '78727'
			    }
			  }
			}
		},

		//CASE 4.2
		{
			id : '4.2',
			transactionType : 'Auth - Add Customer and Account',
			apiCall : 'charge',
			expected : {
				result : 'APPROVED'
			},
			data : {
				firstName : "George",
			  lastName : "Washington",
			 	address: {
			      line1: '42 Presidential Ln',
			      city: 'Austin',
			      zip: '78727'
			  },
				amount: 15.00,
			  addToVault: true,
			  card: {
			  	firstName : "George",
			  	lastName : "Washington",
			    number: '5424 1802 7979 1732',
			    cvv : "999",
			    expirationDate: '12/2016',
			    address: {
			      line1: '42 Presidential Ln',
			      city: 'Austin',
			      zip: '78727'
			    }
			  }
			}
		},

		//CASE 4.3
		{
			id : '4.3',
			transactionType : 'Auth - Add Customer and Account',
			apiCall : 'charge',
			expected : {
				result : 'APPROVED'
			},
			data : {
				firstName : "John",
			  lastName : "Adams",
			 	address: {
			      line1: '43 Pennsylvania Ave',
			      city: 'Austin',
			      zip: '78727'
			  },
				amount: 20.00,
			  addToVault: true,
			  card: {
			  	firstName : "John",
			  	lastName : "Adams",
			    number: '6011 0000 0000 0012',
			    cvv : "999",
			    expirationDate: '12/2016',
			    address: {
			      line1: '43 Pennsylvania Ave',
			      city: 'Austin',
			      zip: '78727'
			    }
			  }
			}
		}

	],

	//---- PAYING WITH A STORED VAULT ACCOUNT --- //
	'Paying with a Stored Vault Account' : [
		//CASE 5.1
		{
			id : '5.1',
			transactionType : 'Stored Vault Account - Auth',
			apiCall : 'authorize',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [
				{caseId : '2.3', dataId : 'customerId'},
				{caseId : '2.3', dataId : 'paymentMethodId'}
			],
			data : {
				paymentVaultToken : {},
				amount: 11.00,
				extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
			  }
			}
		},

		//CASE 5.3
		{
			id : '5.3',
			transactionType : 'Stored Vault Account - AuthCapture',
			apiCall : 'charge',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [
				{caseId : '3.1', dataId : 'customerId'},
				{caseId : '3.1', dataId : 'paymentMethodId'}
			],
			data : {
				paymentVaultToken : {},
				amount: 12.00,
				extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
			  }
			}
		},

		//CASE 5.4
		{
			id : '5.4',
			transactionType : 'Stored Vault Account - AuthCapture',
			apiCall : 'charge',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [
				{caseId : '3.2', dataId : 'customerId'},
				{caseId : '3.2', dataId : 'paymentMethodId'}
			],
			data : {
				paymentVaultToken : {},
				amount: 13.00,
				extendedInformation: {
			    typeOfGoods: 'DIGITAL'
			  }
			}
		},

		//CASE 5.5
		{
			id : '5.5',
			transactionType : 'Stored Vault Account - AuthCapture',
			apiCall : 'charge',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [
				{caseId : '3.3', dataId : 'customerId'},
				{caseId : '3.3', dataId : 'paymentMethodId'}
			],
			data : {
				paymentVaultToken : {},
				amount: 14.00,
				extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
			  }
			}
		},

		//CASE 5.6
		{
			id : '5.6',
			transactionType : 'Stored Vault Account - AuthCapture',
			apiCall : 'charge',
			expected : {
				result : 'APPROVED'
			},
			dataResultRef : [
				{caseId : '3.4', dataId : 'customerId'},
				{caseId : '3.4', dataId : 'paymentMethodId'}
			],
			data : {
				paymentVaultToken : {},
				amount: 15.00,
				extendedInformation: {
			    typeOfGoods: 'DIGITAL'
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