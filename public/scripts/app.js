angular.module('semestro', []);

angular.module('semestro').
config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/signup', { templateUrl: 'views/signup.html', controller: 'SignUpCtrl' })
    .otherwise({ redirectTo: '/signup' });

//  $locationProvider.html5Mode(true);
}]);
