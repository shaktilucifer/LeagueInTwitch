var app = angular.module('twitchApp', []);
app.controller('twitchController', function($scope,$http) {
    $scope.testing = "test"
    $http({
      method: 'GET',
      url: 'https://api.twitch.tv/kraken/search/streams?q=league%20of%20legends&limit=30'
    }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

});
