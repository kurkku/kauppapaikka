'use strict';

/**
 * Delete Module
 * @namespace Modules
 */
angular.module('kauppapaikka.controllers.delete', []).controller('DeleteController', DeleteController);
DeleteController.$inject = ['$scope', 'marketadService'];

/**
 * @namespace DeleteController
 * @desc Controller for deleting marketads.
 * @memberOf Controllers
 */
function DeleteController($scope, marketadService) {

  $scope.deleteAd = function(id) {
    $scope.deleteStatus = "pending";
    // Delete the ad from the backend.
    marketadService.deleteAd(id)
    .then(
      function success(response) {
        $scope.deleteStatus = "ok";
      },
      function error(response) {
        $scope.deleteStatus = "failure";
      }
    );
  };
}
