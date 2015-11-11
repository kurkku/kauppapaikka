'use strict';

angular.module('kauppapaikka.filters.prettyeuro', []).filter('prettyEuro', function() {
  return function(euroCents) {
    return (euroCents / 100) + ' \u20AC';
  };
});
