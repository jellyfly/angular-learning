var app = angular.module("myApp", []);

app.controller("MyController", function($scope, $interpolate) {
	// set up a watch
	$scope.$watch("emailBody", function(body) {
		if (body) {
			var template = $interpolate(body);
			$scope.previewText = template({to: $scope.to});
		}
	});
});