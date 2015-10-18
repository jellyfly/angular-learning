var app = angular.module("myApp", [])

app.controller('MyController',function($scope, $parse) {
	$scope.$watch('expr', function(newVal, oldVal, scope){
		if (newVal !== oldVal) {
			// set up parseFun with the expression
			var parseFun = $parse(newVal);

			// get the value of parsed expression
			scope.parsedValue = parseFun(scope);
		}
	});
});