'use strict';

angular.module('myApp.DailyReports', ['myApp.data'])
.controller('DailyReportsListController', [
    '$scope','$location', '$routeParams', 'dataService', function ($scope, $location, $routeParams, dataService) {

        var project = $routeParams.project || 123;
        var data = [];
        
        $scope.reports = dataService.all(project).then(function (reports) {
            var start = '11/18/2013';
            
            //Start at date and work back 7 days
            for(var i = 0; i < 7; i++)
            {
                var date = new Date(start).addDays(-1 * i);
                var report = dataService.get(date);
            }
            
            return reports;
        });
        
        $scope.goToReport = function() {
            $("#selectDateModal").modal('hide');
            
            var view = '/Report/123/20130911';
            $location.path(view);
        }
		$scope.goToStart = function() {
            var view = '/Report';
            $location.path(view);
        }
		$scope.goToTues = function() {
            var view = '/ReportTues';
            $location.path(view);
        }
		$scope.goToReport = function() {
            var view = '/Report3';
            $location.path(view);
        }
		

    }
])

.controller('DailyReportsDetailController', [
    '$scope', '$location', function ($scope, $location) {
        
        $scope.imdone = false;
        
        $scope.goToList = function() {
            var view = '/List';
            $location.path(view);
			$("#selectDateModal").modal('hide');
        }
        $scope.goToTues = function() {
            var view = '/ReportTues';
            $location.path(view);
        }
		$scope.goToStart = function() {
            var view = '/Report';
            $location.path(view);
        }
		$scope.goToReport = function() {
            var view = '/Report3';
            $location.path(view);
        }		
		
        
        $scope.goToJournalList = function() {
            var view = '/Report/123/20130911/Journal';
            $location.path(view);
        }
        
        $scope.goToAddJournal = function() {
            var view = '/Report/123/20130911/Journal/1234';
            $location.path(view);
        }
        
        $scope.goToWeatherList = function() {
            var view = '/Report/123/20130911/Weather';
            $location.path(view);
        }
        
        $scope.goToAddWeather = function() {
            //var view = '/Report/123/20130911/Weather/1234';
            //$location.path(view);
        }
        
        $scope.goToPhotoList = function() {
            var view = '/Report/123/20130911/Photo';
            $location.path(view);
        }
        
        $scope.goToAddPhoto = function() {
            var view = '/Report/123/20130911/Photo/1234';
            $location.path(view);
        }
        
        $scope.goToManpowerList = function() {
            var view = '/Report/123/20130911/Manpower';
            $location.path(view);
        }
        
        $scope.goToAddManpower = function() {
            var view = '/Report/123/20130911/Manpower/1234';
            $location.path(view);
        }
    }
])

;