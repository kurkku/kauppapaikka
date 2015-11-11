'use strict';

/**
 * Add Module
 * @namespace Modules
 */
angular.module('kauppapaikka.controllers.add', []).controller('AddController', AddController);
AddController.$inject = ['$scope', '$location', 'marketadService', 'marketadValidator'];

/**
 * @namespace AddController
 * @desc Controller for adding marketads.
 * @memberOf Controllers
 */
function AddController($scope, $location, marketadService, marketadValidator) {

  $scope.submitted = false;
  $scope.errorText = "Unknown error";

  $scope.submitMarketad = function() {

    if ($scope.addNewForm.$valid && marketadValidator($scope.marketad)) {
      // Client-side validation passed

      $scope.uploading = true;
      $scope.uploadStatus = "pending";

      // Convert the price to cents.
      var priceCents = marketadService.convertToCents($scope.marketad.price);
      if (priceCents === null) {
        return;
      }

      // Document that is uploaded to the backend.
      var marketad = {
        title: $scope.marketad.title,
        description: $scope.marketad.description,
        priceCents: priceCents,
        imageUrl: $scope.marketad.imageUrl || null,
        thumbnailUrl: $scope.marketad.thumbnailUrl || null,
        email: $scope.marketad.email,
        phone: $scope.marketad.phone
      };

      // Send the document to the backend.
      marketadService.addAd(marketad)
      .then(
        function success(response) {
          $scope.uploadStatus = "ok";
          $location.path('/details/' + response.data.id);
        },
        function error(response) {
          $scope.uploadStatus = "failure";
          // Pass the server response to the view
          $scope.errorText = (response.data !== null) ? response.data.message : 'Unknown error';
          $scope.submitted = false;
        }).then(function(response) {
          // Finally
          $scope.uploading = false;
        }
      );

      $scope.submitted = true;
    }
  };
}
