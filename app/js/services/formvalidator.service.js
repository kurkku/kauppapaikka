'use strict';

angular.module('kauppapaikka.services.marketadvalidator', []).factory('marketadValidator', [
  function() {
    // The validator function returns false if any required field is null,
    // or if the email address doesn't match the regexp.
    // Otherwise it returns true.
    return function(marketad) {
      return !!(marketad &&
        marketad.title &&
        marketad.description &&
        marketad.price &&
        marketad.phone &&
        marketad.email &&
        marketad.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i) !== null);
  };
}]);
