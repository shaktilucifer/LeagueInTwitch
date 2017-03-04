var app = angular.module('twitchApp', []);
app.controller('twitchController', function($scope,$http) {
    $http({
      method: 'GET',
      url: 'https://api.twitch.tv/kraken/streams?q=league%20of%20legends&limit=30',
      headers: {
        'Client-ID': 'my6s8wrko20vyym17bpy74xkavg6m3'
      }
    }).then(function successCallback(response) {
        var streams = response.data.streams;
        var streamNames = [];
        for(var i=0;i < 30 ; i++){
          streamNames.push(streams[i].channel.display_name);
        }
console.log(streamNames);
$scope.streamNames = streamNames;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

});
