/*global angular*/

angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: 'app.html',
            controller: 'AppCtrl',
            controllerAs: 'app'
        })
        .when('/cookies/:cookieType', 
        {
            redirectTo: function(routeParams, path, search){
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

.controller('AppCtrl', function($routeParams) {
    /*    $route.routes['/'] = {
            templateUrl: 'app.html',
            controller: 'AppCtrl',
            controllerAs: 'app'
        };*/

    let self = this;
    self.message = `The app routing is working`;

});
