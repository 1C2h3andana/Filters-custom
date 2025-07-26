(function () {
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);

  MsgController.$inject = ['$scope', '$filter'];
  function MsgController($scope, $filter) {
    $scope.name = "Chandu";
    $scope.stateOfBeing = "angre";

    $scope.sayMessage = function () {
      var msg = "Chandu likes to eat healthy snacks at night!";
      return msg;
    };

    $scope.sayLovesMessage = function () {
      var msg = "Chandu likes to eat healthy snacks at night!";
      var lovesFilter = $filter('loves');
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.feedChandu = function () {
      $scope.stateOfBeing = "feed";
    };
  }

  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    };
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }
})();
