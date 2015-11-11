'use strict';

/**
 * Details Module
 * @namespace Modules
 */
angular.module('kauppapaikka.controllers.details', []).controller('DetailsController', DetailsController);
DetailsController.$inject = ['$scope', '$routeParams', 'marketadService'];

/**
 * @namespace DetailsController
 * @desc Controller for presenting details of marketads.
 * @memberOf Controllers
 */
function DetailsController($scope, $routeParams, marketadService) {

  $scope.marketad = {};
  activate();
  ////////

  function activate() {
    // Request a single ad from the backend.
    marketadService.getAd($routeParams.id)
    .then(
      function success(response) {
        $scope.marketad = response.data;
        $scope.marketad.found = true;
      },
      function error(response) {
        $scope.marketad.found = false;
      }
    );
  }
}
