var Semestro = angular.module('semestro', []);

Semestro.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'views/signup.html',
    controller: SignUpCtrl
  }).otherwise({
  	templateUrl: 'views/signup.html',
    controller: SignUpCtrl
  });

//  $locationProvider.html5Mode(true);
}]);