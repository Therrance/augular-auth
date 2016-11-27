/*global angular*/

angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: 'app.html',
            controller: 'AppCtrl',
            resolve: {
                app: function($q, $timeout) {
                    let defer = $q.defer();
                    $timeout(function() {
                        defer.resolve();
                    }, 2000);
                    return defer.promise;
                }
            }
        })
        .when('/cookies/:cookieType', {
            redirectTo: function(routeParams, path, search) {
                console.log(routeParams);
                console.log(path);
                console.log(search);
                return `/${routeParams.cookieType}`;
            }
        })
        .when('/sugar', {
            template: 'Sugar cookie'
        })
        .otherwise({
            redirectTo: function(routeParams, path, search) {
                console.log(routeParams);
                console.log(path);
                console.log(search);
                return '/';
            }
        });
})

.controller('AppCtrl', function($scope) {

    $scope.model = {
        message: `The app is great`
    };

});
