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
        var streamUrl = [];
        angular.forEach(streams, function(value, key) {
            streamNames.push(value.channel.display_name);
            streamStatus.push(value.channel.status);
            streamUrl.push(value.channel.url)
        });
        console.log(streams);
        $scope.streamNames = streamNames;
        $scope.streamStatus = streamStatus;
        $scope.streamUrl = streamUrl;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    $scope.safeUrlChromeTabs = function(href){
      console.log(href);
      chrome.tabs.create({url: href});
    };

});
