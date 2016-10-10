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
					cardCodeResult : 'MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4444 3333 2222 1111',
			    cvv: '999',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78759'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
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
			    typeOfGoods: 'DIGITAL'
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
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '5424 1802 7979 1732',
			    cvv: '998',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
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
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
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
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '6011 0000 0000 0012',
			    cvv: '996',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
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
			    number: '6011 0009 9100 1201',
			    cvv: '999',
			    expirationDate: '12/2016',
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
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
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 21.00,
			  card: {
			    number: '3411 1159 7241 002',
			    cvv: '9999',
			    expirationDate: '12/2016',
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
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
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '3759 8765 4321 004',
			    cvv: '9997',
			    expirationDate: '12/2016',
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
			  }
			}
		}


	],

	//---- PRIOR AUTHORIZATION --- //
	'Prior Authorization Capture' : [

		//CASE 2.1
		{
			id : '2.1',
			transactionType : 'Capture',
			apiCall : 'capture',
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
			  card: {
			    number: '4444 3333 2222 1111',
			    expirationDate: '12/2016',
			  }
			}
		},

		//CASE 2.2
		{
			id : '2.2',
			transactionType : 'Capture',
			apiCall : 'capture',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '1.4',
				dataId : 'transactionId' 
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '5149 6122 2222 2229',
			    expirationDate: '12/2016',
			  }
			}
		},

		//CASE 2.3
		{
			id : '2.3',
			transactionType : 'Capture',
			apiCall : 'capture',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '1.6',
				dataId : 'transactionId' 
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '6011 0009 9100 1201',
			    expirationDate: '12/2016',
			  }
			}
		},

		//CASE 2.4
		{
			id : '2.4',
			transactionType : 'Capture',
			apiCall : 'capture',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '1.8',
				dataId : 'transactionId' 
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '3759 8765 4321 004',
			    expirationDate: '12/2016',
			  }
			}
		}

	],

	//---- AUTHORIZATION-CAPTURE --- //
	'Authorization-Capture' : [

		//CASE 3.1
		{
			id : '3.1',
			transactionType : 'Charge',
			apiCall : 'charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4444 3333 2222 1111',
			    expirationDate: '12/2016',
			    cvv : 999,
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
			  }
			}

		},

		//CASE 3.2
		{
			id : '3.2',
			transactionType : 'Charge',
			apiCall : 'charge',
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
			    expirationDate: '12/2016',
			    cvv : 999,
			    address: {
			      line1: '456 Testing Way',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
			  }
			}

		},

		//CASE 3.3
		{
			id : '3.3',
			transactionType : 'Charge',
			apiCall : 'charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '5424 1802 7979 1732',
			    expirationDate: '12/2016',
			    cvv : 998,
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
			  }
			}

		},

		//CASE 3.4
		{
			id : '3.4',
			transactionType : 'Charge',
			apiCall : 'charge',
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
			    expirationDate: '12/2016',
			    cvv : 996,
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
			  }
			}

		},

		//CASE 3.5
		{
			id : '3.5',
			transactionType : 'Charge',
			apiCall : 'charge',
			expected : {
				result : 'APPROVED',
				transaction : {
					cardCodeResult : 'MATCH',
					avsResult : 'MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '6011 0000 0000 0012',
			    expirationDate: '12/2016',
			    cvv : 996,
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
			  }
			}
		},

		//CASE 3.6
		{
			id : '3.6',
			transactionType : 'Charge',
			apiCall : 'charge',
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
			    expirationDate: '12/2016',
			    cvv : 999,
			    address: {
			      line1: '123 Main St.',
			      city: 'Austin',
			      zip: '78727'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
			  }
			}
		},

		//CASE 3.7
		{
			id : '3.7',
			transactionType : 'Charge',
			apiCall : 'charge',
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
			    number: '3411 1159 7241 002',
			    expirationDate: '12/2016',
			    cvv : 9999,
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'PHYSICAL'
			  }
			}
			

		},

		//CASE 3.8
		{
			id : '3.8',
			transactionType : 'Charge',
			apiCall : 'charge',
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
			    number: '3759 8765 4321 004',
			    expirationDate: '12/2016',
			    cvv : 9997,
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
			  }
			}
		},
	],

	//---- VOID --- //
	'Void' : [
		//CASE 4.1
		{
			id : '4.1',
			transactionType : 'Void',
			apiCall : 'void',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '1.2',
				dataId : 'transactionId' 
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4005 5192 0000 0004',
			    expirationDate: '12/2016',
			  }
			}
		},

		//CASE 4.3
		{
			id : '4.3',
			transactionType : 'Void',
			apiCall : 'void',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '1.3',
				dataId : 'transactionId' 
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '5424 1802 7979 1732',
			    expirationDate: '12/2016',
			  }
			}
		},

		//CASE 4.5
		{
			id : '4.5',
			transactionType : 'Void',
			apiCall : 'void',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '1.5',
				dataId : 'transactionId' 
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '6011 0000 0000 0012',
			    expirationDate: '12/2016',
			  }
			}
		},

		//CASE 4.7
		{
			id : '4.7',
			transactionType : 'Void',
			apiCall : 'void',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '1.7',
				dataId : 'transactionId' 
			},
			data : {
				amount: 21.00,
			  card: {
			    number: '3411 1159 7241 002',
			    expirationDate: '12/2016',
			  }
			}
		}
	],

	//---- REFUND OR CREDIT --- //
	'Refund or Credit' : [

		//CASE 5.1
		{
			id : '5.1',
			transactionType : 'Refund/Credit',
			apiCall : 'refund',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '2.1',
				dataId : 'transactionId' 
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4444 3333 2222 1111',
			    expirationDate: '12/2016',
			  }
			}
		},

		//CASE 5.3
		{
			id : '5.3',
			transactionType : 'Refund/Credit',
			apiCall : 'refund',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '2.2',
				dataId : 'transactionId' 
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '5149 6122 2222 2229',
			    expirationDate: '12/2016',
			  }
			}
		},

		//CASE 5.5
		{
			id : '5.5',
			transactionType : 'Refund/Credit',
			apiCall : 'refund',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '2.3',
				dataId : 'transactionId' 
			},
			data : {
				amount: 12.00,
			  card: {
			    number: '6011 0009 9100 1201',
			    expirationDate: '12/2016',
			  }
			}
		},

		//CASE 5.6
		{
			id : '5.6',
			transactionType : 'Refund/Credit',
			apiCall : 'refund',
			expected : {
				result : 'APPROVED',
				transaction : null
			},
			dataResultRef : {
				caseId : '2.4',
				dataId : 'transactionId' 
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '3759 8765 4321 004',
			    expirationDate: '12/2016',
			  }
			}
		}
	],

	//---- ERROR HANDLING --- //
	'Error Handling' : [

		//CASE 6.1
		{
			id : '6.1',
			transactionType : 'Authorize',
			apiCall : 'authorize',
			expected : {
				result : 'DECLINE',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 11.00,
			  card: {
			    number: '4012 8888 8888 1881',
			    expirationDate: '12/2016',
			    cvv : 999,
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
			  }
			}
		},

		//CASE 6.3
		{
			id : '6.3',
			transactionType : 'Authorize',
			apiCall : 'authorize',
			expected : {
				result : 'DECLINE',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 31.00,
			  card: {
			    number: '6011 0009 9130 0009',
			    expirationDate: '12/2016',
			    cvv : 996,
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
			  }
			}
		},

		//CASE 6.6
		{
			id : '6.6',
			transactionType : 'Charge',
			apiCall : 'charge',
			expected : {
				result : 'DECLINE',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 31.00,
			  card: {
			    number: '5567 0640 0000 0000',
			    expirationDate: '12/2016',
			    cvv : 998,
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
			  }
			}
		},

		//CASE 6.8
		{
			id : '6.8',
			transactionType : 'Charge',
			apiCall : 'charge',
			expected : {
				result : 'DECLINE',
				transaction : {
					cardCodeResult : 'NOT_MATCH',
					avsResult : 'NOT_MATCH'
				}
			},
			data : {
				amount: 31.00,
			  card: {
			    number: '3714 4963 5398 431',
			    expirationDate: '12/2016',
			    cvv : 9997,
			    address: {
			      line1: '456 Testing Way',
			      city: 'Rockville',
			      zip: '20704'
			    }
			  },
			  extendedInformation: {
			    typeOfGoods: 'DIGITAL'
			  }
			}
		}
	],

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