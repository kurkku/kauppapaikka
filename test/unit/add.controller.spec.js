'use strict';

describe('AddController', function() {
  var scope, ctrl, $httpBackend, marketadService, getCtrl;

  beforeEach(module('kauppapaikka'));

  beforeEach(inject(function(_$httpBackend_, _marketadService_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    marketadService = _marketadService_;
    scope = $rootScope.$new();

    getCtrl = function() {
      ctrl = $controller('AddController', {$scope: scope, marketadService: marketadService});
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should set scope.submitted to false on init', function() {
    var ctrl = getCtrl();
    expect(scope.submitted).toBe(false);
  });

});
