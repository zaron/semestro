var Semestro = angular.module('semestro', []);

Semestro.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/signup/', {
    template: 'views/signup.html',
    controller: SignUpCtrl
  });

//  $locationProvider.html5Mode(true);
}]);