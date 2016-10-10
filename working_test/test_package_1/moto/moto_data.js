var cases = {

	//---- AUTHORIZATION ONLY --- //
	'Authorization Only' : [

		//CASE 1.1
		{
			id : '1.1',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4275 3300 1234 5675',
			    cvv: '996',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'SINGLE_PURCHASE',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 1.2
		{
			id : '1.2',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4005 5192 0000 0004',
			    cvv: null,
			    expirationDate: '12/2016',
			    address: null
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'RECURRING',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 1.3
		{
			id : '1.3',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4005 5192 0000 0004',
			    cvv: '999',
			    expirationDate: '12/2016',
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'INSTALLMENT',
			    	totalNumberOfInstallments : 1,
			    	currentInstallment : 1
			    }
			  }
			}
		},

		//CASE 1.4
		{
			id : '1.4',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 21.00,
			  card: {
			    number: '5526 3990 0064 8568',
			    cvv: '996',
			    expirationDate: '12/2016',
			    address: {
			      line1: '456 Testing Way',
			      city: 'Austin',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'SINGLE_PURCHASE',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 1.5
		{
			id : '1.5',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '5149 6122 2222 2229',
			    cvv: null,
			    expirationDate: '12/2016',
			    address: null
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'RECURRING',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 1.6
		{
			id : '1.6',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '5149 6122 2222 2229',
			    cvv: '996',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Rockville',
			      zip: '20850'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'INSTALLMENT',
			    	totalNumberOfInstallments : 2,
			    	currentInstallment : 1
			    }
			  }
			}
		},

		//CASE 1.7
		{
			id : '1.7',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '6011 9050 0000 0004',
			    cvv: '996',
			    expirationDate: '12/2016',
			    address: {
			      line1: '456 Testing Way',
			      city: 'Austin',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'SINGLE_PURCHASE',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 1.8
		{
			id : '1.8',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '6011 0009 9100 1201',
			    cvv: null,
			    expirationDate: '12/2016',
			    address: null
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'RECURRING',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 1.9
		{
			id : '1.9',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '6011 0009 9100 1201',
			    cvv: '999',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Rockville',
			      zip: '20850'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'INSTALLMENT',
			    	totalNumberOfInstallments : 3,
			    	currentInstallment : 1
			    }
			  }
			}
		},

		//CASE 1.10
		{
			id : '1.10',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '3714 4963 5392 376',
			    cvv: '9999',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'SINGLE_PURCHASE',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 1.11
		{
			id : '1.11',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '3759 8765 4321 004',
			    cvv: null,
			    expirationDate: '12/2016',
			    address: null
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'RECURRING',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 1.12
		{
			id : '1.12',
			apiCall : 'authorize',
			transactionType : 'Authorize',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '3759 8765 4321 004',
			    cvv: '9997',
			    expirationDate: '12/2016',
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20850'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'INSTALLMENT',
			    	totalNumberOfInstallments : 4,
			    	currentInstallment : 1
			    }
			  }
			}
		}
	],

	//---- AUTHORIZATION-CAPTURE --- //
	'Authorization-Capture' : [
		
		//CASE 2.1
		{
			id : '2.1',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4275 3300 1234 5675',
			    cvv: '996',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'SINGLE_PURCHASE',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 2.2
		{
			id : '2.2',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4005 5192 0000 0004',
			    cvv: null,
			    expirationDate: '12/2016',
			    address: null
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'RECURRING',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 2.3
		{
			id : '2.3',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4005 5192 0000 0004',
			    cvv: '999',
			    expirationDate: '12/2016',
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'INSTALLMENT',
			    	totalNumberOfInstallments : 1,
			    	currentInstallment : 1
			    }
			  }
			}
		},

		//CASE 2.4
		{
			id : '2.4',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 21.00,
			  card: {
			    number: '5526 3990 0064 8568',
			    cvv: '996',
			    expirationDate: '12/2016',
			    address: {
			      line1: '456 Testing Way',
			      city: 'Austin',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'SINGLE_PURCHASE',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 2.5
		{
			id : '2.5',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '5149 6122 2222 2229',
			    cvv: null,
			    expirationDate: '12/2016',
			    address: null
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'RECURRING',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 2.6
		{
			id : '2.6',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '5149 6122 2222 2229',
			    cvv: '996',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Rockville',
			      zip: '20850'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'INSTALLMENT',
			    	totalNumberOfInstallments : 2,
			    	currentInstallment : 1
			    }
			  }
			}
		},

		//CASE 2.7
		{
			id : '2.7',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '6011 9050 0000 0004',
			    cvv: '996',
			    expirationDate: '12/2016',
			    address: {
			      line1: '456 Testing Way',
			      city: 'Austin',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'SINGLE_PURCHASE',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 2.8
		{
			id : '2.8',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '6011 0009 9100 1201',
			    cvv: null,
			    expirationDate: '12/2016',
			    address: null
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'RECURRING',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 2.9
		{
			id : '2.9',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '6011 0009 9100 1201',
			    cvv: '999',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Rockville',
			      zip: '20850'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'INSTALLMENT',
			    	totalNumberOfInstallments : 3,
			    	currentInstallment : 1
			    }
			  }
			}
		},

		//CASE 2.10
		{
			id : '2.10',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '3714 4963 5392 376',
			    cvv: '9999',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'SINGLE_PURCHASE',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 2.11
		{
			id : '2.11',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '3759 8765 4321 004',
			    cvv: null,
			    expirationDate: '12/2016',
			    address: null
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'RECURRING',
			    	totalNumberOfInstallments : null,
			    	currentInstallment : null
			    }
			  }
			}
		},

		//CASE 2.12
		{
			id : '2.12',
			apiCall : 'charge',
			transactionType : 'Charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '3759 8765 4321 004',
			    cvv: '9997',
			    expirationDate: '12/2016',
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20850'
			    }
			  },
			  extendedInformation: {
			    mailOrTelephoneData :{
			    	type : 'INSTALLMENT',
			    	totalNumberOfInstallments : 4,
			    	currentInstallment : 1
			    }
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