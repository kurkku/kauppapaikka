'use strict';

/**
 * List Module
 * @namespace Modules
 */
angular.module('kauppapaikka.controllers.list', []).controller('ListController', ListController);
ListController.$inject = ['$scope', 'marketadService'];

/**
 * @namespace ListController
 * @desc Controller for listing marketads.
 * @memberOf Controllers
 */
function ListController($scope, marketadService) {
  $scope.marketads = [];

  activate();
  ////////

  function activate() {
    // Request ads from the backend.
    marketadService.getAds().then(function(response) {
      $scope.marketads = response.data;
    });
  }
}
