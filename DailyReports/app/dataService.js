'use strict';

angular.module('myApp.data', [])
    .factory('dataService', ['$http', 'utils', function($http, utils) {
        var path = 'js/data.js';
        
        var reports = $http.get(path).then(function(response) {
            return response.data.DailyReports;
        });
        
        var factory = {};
        
        // Returns all reports
        factory.all = function () {
            return reports;
        };
        
        // Returns only the report for the specified date
        factory.get = function(date)
        {
            return reports.then(function() {
                return utils.findByDate(reports, date);
            });
        };
        
        // Saves the specified report
        factory.saveReport = function(data)
        {
            reports = data;
        }
        
        factory.saveJournal = function(data)
        {
            
        }
        
        return factory;
    }])

    .factory('utils', [function() {
       
        var factory = {}
        
        factory.findByDate = function(data, date){
            for (var i = 0; i < data.length; i++)
            {
                if (data[i].date == date) return data[i].date;
            }
        }
        
        return factory;
    }])
;