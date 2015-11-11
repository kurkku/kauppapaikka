'use strict';

describe('ListController', function() {
  var scope, ctrl, $httpBackend, marketadService, getCtrl;

  beforeEach(module('kauppapaikka'));

  beforeEach(inject(function(_$httpBackend_, _marketadService_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    marketadService = _marketadService_;
    scope = $rootScope.$new();

    getCtrl = function() {
      ctrl = $controller('ListController', {$scope: scope, marketadService: marketadService});
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should create marketads model with 2 items', function() {

    $httpBackend.expectGET('http://mepa-store-api.herokuapp.com/marketads/').respond(
      [{"id":"12345","title":"Advert one","description":"This is the first ad","priceCents":123,"imageUrl":null,"thumbnailUrl":null,"email":"me@home.com","phone":"555-1234"},
      {"id":"54321","title":"The second ad","description":"Second ad","priceCents":123.321,"imageUrl":null,"thumbnailUrl":null,"email":"she@home.com","phone":"555-1234"}]);

    var ctrl = getCtrl();
    $httpBackend.flush();
    expect(scope.marketads.length).toBe(2);
  });

});
