var app = angular.module('myApp', ['emailParser']);

app.controller('MyController', ['$scope', 'EmailParser', function($scope, EmailParser) {
	// set up the watch
	$scope.$watch('emailBody', function(body) {
		if (body) {
			$scope.previewText =
				EmailParser.parse(body, {
					to: $scope.to
				});
		}
	});
}]);
