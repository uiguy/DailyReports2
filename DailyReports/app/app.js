'use strict';

angular.module('myApp', [
    'myApp.data', 'myApp.DailyReports', 'myApp.DailyReports.Journal'
    , 'myApp.DailyReports.Weather', 'myApp.DailyReports.Photo', 'myApp.DailyReports.Manpower'
])
.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/Report', {
            templateUrl: 'app/DailyReport/index.html',
            controller: 'DailyReportsDetailController'
        })
		$routeProvider
        .when('/Report2', {
            templateUrl: 'app/DailyReport/detail1.html',
            controller: 'DailyReportsDetailController'
        })
		$routeProvider
        .when('/Report3', {
            templateUrl: 'app/DailyReport/detail2.html',
            controller: 'DailyReportsDetailController'
        })
		$routeProvider
        .when('/ReportTues', {
            templateUrl: 'app/DailyReport/detail.html',
            controller: 'DailyReportsDetailController'
        })
        .when('/List', {
            templateUrl: 'app/DailyReport/list.html',
            controller: 'DailyReportsListController'
        })
        .when('/Report/:project/:date', {
            templateUrl: 'app/DailyReport/detail.html',
            controller: 'DailyReportsDetailController'            
        })

        /* Journal */
        .when('/Report/:project/:date/Journal', {
            templateUrl: 'app/DailyReport/Journal/list.html',
            controller: 'JournalListController'            
        })
        .when('/Report/:project/:date/Journal/:time', {
            templateUrl: 'app/DailyReport/Journal/detail.html',
            controller: 'JournalDetailController'            
        })
        
        /* Weather */
        .when('/Report/:project/:date/Weather', {
            templateUrl: 'app/DailyReport/Weather/list.html',
            controller: 'WeatherListController'            
        })
        .when('/Report/:project/:date/Weather/:time', {
            templateUrl: 'app/DailyReport/Weather/detail.html',
            controller: 'WeatherDetailController'            
        })
        
        /* Photo */
        .when('/Report/:project/:date/Photo', {
            templateUrl: 'app/DailyReport/Photo/list.html',
            controller: 'PhotoListController'            
        })
        .when('/Report/:project/:date/Photo/:time', {
            templateUrl: 'app/DailyReport/Photo/detail.html',
            controller: 'PhotoDetailController'            
        })
        
        /* Manpower */
        .when('/Report/:project/:date/Manpower', {
            templateUrl: 'app/DailyReport/Manpower/list.html',
            controller: 'ManpowerListController'            
        })
        .when('/Report/:project/:date/Manpower/:time', {
            templateUrl: 'app/DailyReport/Manpower/detail.html',
            controller: 'ManpowerDetailController'            
        })
        
        .otherwise({ redirectTo: '/Report' });
    }
]);