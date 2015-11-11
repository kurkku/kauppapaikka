'use strict';

describe('DeleteController', function() {
  var scope, ctrl, $httpBackend, marketadService, getCtrl;

  beforeEach(module('kauppapaikka'));

  beforeEach(inject(function(_$httpBackend_, _marketadService_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    marketadService = _marketadService_;
    scope = $rootScope.$new();

    getCtrl = function() {
      ctrl = $controller('DeleteController', {$scope: scope, marketadService: marketadService});
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should be possible to delete a marketad using an id', function() {
    $httpBackend.expectDELETE('http://mepa-store-api.herokuapp.com/marketads/12345').respond(200, {});
    ctrl = getCtrl();
    scope.deleteAd(12345);
    $httpBackend.flush();
  });
});
