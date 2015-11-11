'use strict';

angular.module('kauppapaikka.config', [])
.constant('config', {
  'backend': 'http://mepa-store-api.herokuapp.com/marketads/',
  'http_cache_enabled': true
});
