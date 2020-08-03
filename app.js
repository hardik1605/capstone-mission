angular.module('appname', ['ngRoute'])
.controller('MainCtrl', function($scope) {
  $scope.welcomeMessage = "Welcome to Capstone Mission";
  $scope.appName = "Capstone Mission";

})
.config(function($routeProvider){
  $routeProvider
        .when('/',
            {
                controller: 'AliensController',
                templateUrl:'views/aliens.html'
            })
        .otherwise({ redirectTo: '/' });
});
