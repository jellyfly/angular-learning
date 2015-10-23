app.directive('ensureUnique', function（$http) {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c) {
			scope.$watch(attrs.ngModel, function(n) {
				if (!n) return;
				$http({
					method: 'POST',
					url: '/api/check/' + atrs.ensureUnique,
					data: {
						field: attrs.ensureUnique,
						value: scope.ngModel
					}
				}).success(function(data) {
					c.$setValidity('unique', data.isUnique);
				}).error(function(date) {
					c.$setValidity('unique', false);
				});
			});
		}
	}
});