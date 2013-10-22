'use strict';

angular.module('myApp.DailyReports.Manpower', [])
	.controller('ManpowerListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        $scope.goToDailyReport = function(){
            var view = "/Report3";
            $location.path(view);
        }
        
        $scope.goToAddManpower = function() {
            var view = '/Report/123/20130911/Manpower/1234';
            $location.path(view);
        }
        
    }])

    .controller('ManpowerDetailController', ['$scope', '$location', function ($scope, $location) {

        $scope.goToList = function() {
            var view = '/List';
            $location.path(view);
        }
        $scope.goToDailyReport = function() {
            var view = '/Report3';
            $location.path(view);
        }
		$scope.goBack = function() {
            var view = '/Report2';
            $location.path(view);
        }
        
        $scope.saveManpowerEntry = function(){
            $scope.goToDailyReport();
        }
    }]);