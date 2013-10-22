'use strict';

angular.module('myApp.DailyReports.Photo', [])
.controller('PhotoListController', [
    '$scope', '$location', function ($scope, $location) {
        $scope.goToDailyReport = function() {
            var view = "/Report/123/20130911";
            $location.path(view);
        }
        
        $scope.goToAddPhoto = function() {
            var view = '/Report/123/20130911/Photo/1234';
            $location.path(view);
        }
    }
])

.controller('PhotoDetailController', [
    '$scope', '$location', function ($scope, $location) {
        document.addEventListener("deviceready", onDeviceReady, false);
        var pictureSource, destinationType;
        $scope.goToList = function() {
            var view = '/Report/123/20130911';
            $location.path(view);
        }
        
        $scope.savePhotoEntry = function() {
            $scope.goToList();
        }
        
        $scope.photos = [];
        
        // Cordova is ready to be used!
        function onDeviceReady() {
            pictureSource = navigator.camera.PictureSourceType;
            destinationType = navigator.camera.DestinationType;
        }
        
        $scope.capturePhoto = function() {
            // Take picture using device camera and retrieve image as base64-encoded string
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 25, destinationType: destinationType.DATA_URL });
        }
        
        $scope.captureFromAlbum = function() {
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: destinationType.DATA_URL, sourceType: pictureSource.PHOTOLIBRARY })                        
        }
        
        function onPhotoDataSuccess(imageData) {
            $scope.photos.push({"id": $scope.photos.length, "imageData" : "data:image/jpeg;base64," + imageData});
            $scope.$digest();            
        }
            
        // Called if something bad happens.
        function onFail(message) {
            //    alert('Failed because: ' + message);
        }
    }
]);