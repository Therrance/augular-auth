/*global angular*/

angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app.html',
        controller: 'AppCtrl',
        controllerAs: 'app'
    })
    .when('/cookies', {
        template: 'mnom monm mnom'
    }).otherwise({
        template: 'this Route isn\'t set'
    });
})

.controller('AppCtrl', function($route) {
/*    $route.routes['/'] = {
        templateUrl: 'app.html',
        controller: 'AppCtrl',
        controllerAs: 'app'
    };*/

    let self = this;
    self.message = 'The routing is working!';

});
