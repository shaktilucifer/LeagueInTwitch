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
        var streamLogo = [];
        angular.forEach(streams, function(value, key) {
            streamNames.push(value.channel.display_name);
            streamStatus.push(value.channel.status);
            streamUrl.push(value.channel.url);
            streamLogo.push(value.channel.logo);
        });
        $scope.streamNames = streamNames;
        $scope.streamStatus = streamStatus;
        $scope.streamUrl = streamUrl;
        $scope.streamLogo = streamLogo;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
    //Enable links from pop up
    document.getElementsByTagName("BODY")[0].onclick = function(e) {
        e = e || event
        var target = e.target || e.srcElement
        if (target.nodeName != 'A') return
        var href = target.href
        chrome.tabs.create({
            url: href
        });
        return false;
    }
});
