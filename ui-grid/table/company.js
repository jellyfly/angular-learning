var company = angular.module('company', ['ngTouch', 'ui.grid', 'ui.router']);

// configuration for urls
company.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'index.html'
		})
		.state('company', {
			url: '/company',
			templateUrl: 'company.html',
			controller: 'CompanyController'
		})
}]);

// controllers
company.controller('CompanyController', ['$scope', function($scope) {

	// define the information of scope
	$scope.information = [
		{  
			"totalCount":99,
			"companies":[  
				{  
					"id":1,
					"name":"411 Company",
					"country":"132 Country",
					"marketValue":572
				},
				{  
					"id":2,
					"name":"682 Company",
					"country":"437 Country",
					"marketValue":719
				},
				{  
					"id":3,
					"name":"855 Company",
					"country":"672 Country",
					"marketValue":243
				},
				{  
					"id":4,
					"name":"769 Company",
					"country":"501 Country",
					"marketValue":683
				},
				{  
					"id":5,
					"name":"526 Company",
					"country":"648 Country",
					"marketValue":238
				},
				{  
					"id":6,
					"name":"198 Company",
					"country":"651 Country",
					"marketValue":604
				},
				{  
					"id":7,
					"name":"82 Company",
					"country":"425 Country",
					"marketValue":305
				},
				{  
					"id":8,
					"name":"427 Company",
					"country":"707 Country",
					"marketValue":304
				},
				{  
					"id":9,
					"name":"973 Company",
					"country":"32 Country",
					"marketValue":700
				},
				{  
					"id":10,
					"name":"601 Company",
					"country":"22 Country",
					"marketValue":739
				},
				{  
					"id":11,
					"name":"681 Company",
					"country":"943 Country",
					"marketValue":112
				},
				{  
					"id":12,
					"name":"453 Company",
					"country":"457 Country",
					"marketValue":26
				},
				{  
					"id":13,
					"name":"260 Company",
					"country":"620 Country",
					"marketValue":697
				},
				{  
					"id":14,
					"name":"284 Company",
					"country":"128 Country",
					"marketValue":886
				},
				{  
					"id":15,
					"name":"185 Company",
					"country":"288 Country",
					"marketValue":807
				},
				{  
					"id":16,
					"name":"532 Company",
					"country":"628 Country",
					"marketValue":658
				},
				{  
					"id":17,
					"name":"802 Company",
					"country":"248 Country",
					"marketValue":187
				},
				{  
					"id":18,
					"name":"710 Company",
					"country":"810 Country",
					"marketValue":257
				},
				{  
					"id":19,
					"name":"735 Company",
					"country":"982 Country",
					"marketValue":424
				},
				{  
					"id":20,
					"name":"268 Company",
					"country":"707 Country",
					"marketValue":405
				}
			]
		}
	];


}]);