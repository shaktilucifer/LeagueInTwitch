var app = angular.module('twitchApp', []);
app.controller('twitchController', function($scope, $http) {
    $http({
        method: 'GET',
        url: config.url,
        params: {
            game: config.game,
            limit: config.limit
        },
        headers: {
            'Client-ID': config.clientId
        }
    }).then(function successCallback(response) {
        var streams = response.data.streams;
        var streamNames = [];
        var streamStatus = [];
        angular.forEach(streams, function(value, key) {
            streamNames.push(value.channel.display_name);
            streamStatus.push(value.channel.status);
        });
        console.log(streamNames);
        $scope.streamNames = streamNames;
        $scope.streamStatus = streamStatus;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

});
