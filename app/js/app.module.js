'use strict';

angular.module('kauppapaikka', [
  'kauppapaikka.config',
  'kauppapaikka.controllers.list',
  'kauppapaikka.controllers.delete',
  'kauppapaikka.controllers.add',
  'kauppapaikka.controllers.details',
  'kauppapaikka.services.marketad',
  'kauppapaikka.services.marketadvalidator',
  'kauppapaikka.filters.prettyeuro',
  'ngRoute'
]);
