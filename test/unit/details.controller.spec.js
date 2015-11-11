'use strict';


describe('DetailsController', function() {
  var scope, ctrl, $httpBackend, marketadService, getCtrl;

  beforeEach(module('kauppapaikka'));

  beforeEach(inject(function(_$httpBackend_, _marketadService_, $rootScope, $routeParams, $controller) {
    $httpBackend = _$httpBackend_;
    marketadService = _marketadService_;
    scope = $rootScope.$new();
    $routeParams.id = 12345;

    getCtrl = function() {
      ctrl = $controller('DetailsController', {$scope: scope, marketadService: marketadService});
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should return a single marketad', function() {

    $httpBackend.expectGET('http://mepa-store-api.herokuapp.com/marketads/12345').respond(
      {"id":"12345","title":"Advert one","description":"This is the first ad","priceCents":123,"imageUrl":null,"thumbnailUrl":null,"email":"me@home.com","phone":"555-1234"}
    );

    var ctrl = getCtrl();
    $httpBackend.flush();
    expect(scope.marketad.id).toBe("12345");
  });

  it('should set scope.marketad.found to true on success', function() {
    $httpBackend.expectGET('http://mepa-store-api.herokuapp.com/marketads/12345').respond(
      {"id":"12345","title":"Advert one","description":"This is the first ad","priceCents":123,"imageUrl":null,"thumbnailUrl":null,"email":"me@home.com","phone":"555-1234"}
    );

    var ctrl = getCtrl();
    $httpBackend.flush();
    expect(scope.marketad.found).toBe(true);
  });

  it('should set scope.marketad.found to false on failure', function() {
    $httpBackend.expectGET('http://mepa-store-api.herokuapp.com/marketads/12345').respond(404, '');

    var ctrl = getCtrl();
    $httpBackend.flush();
    expect(scope.marketad.found).toBe(false);
  });


});
