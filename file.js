/*global angular*/

angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app.html',
        controller: 'AppCtrl',
        controllerAs: 'app'
    });
})

.controller('AppCtrl', function(){
    let self = this;
    self.message = 'The routing is working!';
});
