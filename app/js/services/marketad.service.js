'use strict';

/**
 * Marketad Factory
 * @namespace Factories
 */
angular.module('kauppapaikka.services.marketad', ['kauppapaikka.config']).factory('marketadService', marketadService);
marketadService.$inject = ['$http', '$cacheFactory', 'config'];

/**
 * @namespace marketadService
 * @desc Service provider for backend data access
 * @memberOf Factories
 */
function marketadService($http, $cacheFactory, config) {

  var backendUri = config.backend;
  var http_cache_enabled = config.http_cache_enabled;

  var service = {
    getAds: getAds,
    getAd: getAd,
    addAd: addAd,
    deleteAd: deleteAd,
    convertToCents: convertToCents
  };

  return service;
  ////////

  function getAds() {
    return $http.get(backendUri, {cache: http_cache_enabled});
  }

  function getAd(id) {
    return $http.get(backendUri + id, {cache: http_cache_enabled});
  }

  function addAd(data) {
    // Invalidate the HTTP cache if a marketad is added.
    if (http_cache_enabled) {
      $cacheFactory.get('$http').remove(backendUri);
    }
    return $http.post(backendUri, data);
  }

  function deleteAd(id) {
    // Invalidate the HTTP cache if a marketad is removed.
    if (http_cache_enabled) {
      $cacheFactory.get('$http').remove(backendUri);
    }
    return $http.delete(backendUri + id);
  }

  function convertToCents(price) {
    if (isFinite(price) && price >= 0) {
      // Already a suitable number
      return price * 100;
    } else if (price.toString().search(',') !== -1) {
      // Convert comma to dot
      price = price.toString().replace(',', '.');
      if (isFinite(price) && price >= 0) {
        return price * 100;
      } else {
        // Not a number or < 0
        return null;
      }
    } else {
      // Not a number or < 0
      return null;
    }
  }
}
