var app = angular.module('mysqlMonitor', []);

app.service('tableData', function () {
	this.getBaseVariable = function () {
		return {
			data: [],
			dateModified: null
		};
	};
});

app.controller('main', function ($scope, tableData) {

	$scope.processList 		= tableData.getBaseVariable();
	$scope.systemVariables 	= tableData.getBaseVariable();
	var updateDataFn 		= function (scopePropertyName, data) {
		$scope[scopePropertyName].data = data;
		$scope[scopePropertyName].lastUpdated = new Date();	
	};

	var socket = io.connect("http://pfc.dev/");

	socket.on("show-process-list", function(data) {
	    $scope.$apply(updateDataFn('processList', data));
	});

	socket.on("show-system-variables", function(data) {
	    $scope.$apply(updateDataFn('systemVariables', data));
	});
});