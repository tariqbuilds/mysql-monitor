var app = angular.module('mysqlMonitor', []);

app.controller('main', function ($scope) {

	$scope.processList = {
		data: [],
		dateModified: null
	};

	$scope.systemVariables = {
		data: [],
		dateModified: null
	};

	var socket = io.connect("http://pfc.dev/");

	socket.on("connected", function(data) {
	    // Do stuff when we connect to the server
	    console.log(data);
	});
 
	socket.on("show-process-list", function(data) {
	    $scope.$apply(function () {
	    	$scope.processList.data = data;
	    	$scope.processList.lastUpdated = new Date();
	    });
	});

	socket.on("show-system-variables", function(data) {
	    $scope.$apply(function () {
	    	$scope.systemVariables.data = data;
	    	$scope.systemVariables.lastUpdated = new Date();
	    });
	});
});