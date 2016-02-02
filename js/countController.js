var app = angular.module('app', []);

app.controller('countController', function ($scope) {
	
	$scope.counter = 0;
	
	$scope.addOne = function() {
		$scope.counter++;
	}
});