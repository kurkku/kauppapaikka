'use strict';

angular.module('kauppapaikka').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/ads', {
      templateUrl: 'partials/marketad.list.html',
      controller: 'ListController'
    }).
    when('/details/:id', {
      templateUrl: 'partials/marketad.details.html',
      controller: 'DetailsController'
    }).
    when('/new', {
      templateUrl: 'partials/marketad.new.html',
      controller: 'AddController'
    }).
    otherwise({
      redirectTo: '/ads'
    });
}]);
