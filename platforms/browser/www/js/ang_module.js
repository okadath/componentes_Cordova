var module = angular.module('my-app', ['onsen']);
module.controller('PageController', function($scope) {
  $scope.alert = function(message) {
    ons.notification.alert(message);


  };
});