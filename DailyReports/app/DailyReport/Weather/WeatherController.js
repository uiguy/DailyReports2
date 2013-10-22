'use strict';

angular.module('myApp.DailyReports.Weather', [])
	.controller('WeatherListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        $scope.goToDailyReport = function(){
            var view = "/Report/123/20130911";
            $location.path(view);
        }
        
        $scope.goToAddWeather = function() {
            var view = '/Report/123/20130911/Weather/1234';
            $location.path(view);
        }
        
    }])

    .controller('WeatherDetailController', ['$scope', '$location', function ($scope, $location) {

        $scope.goToList = function() {
            var view = '/Report/123/20130911';
            $location.path(view);
        }
        
        $scope.saveWeatherEntry = function(){
            $scope.goToList();
        }
    }]);