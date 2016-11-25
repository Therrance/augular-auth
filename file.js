/*global angular*/

angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider.when('/:firstName/:middleName/:lastName', {
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

.controller('AppCtrl', function($routeParams) {
/*    $route.routes['/'] = {
        templateUrl: 'app.html',
        controller: 'AppCtrl',
        controllerAs: 'app'
    };*/

    let self = this;
    self.message = `${$routeParams.firstName} ${$routeParams.middleName} ${$routeParams.lastName}`;

});
