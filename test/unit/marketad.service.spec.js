'use strict';

describe('marketadService', function() {
  var marketadService, $httpBackend;

  beforeEach(module('kauppapaikka'));

  beforeEach(inject(function(_$httpBackend_, _marketadService_) {
    $httpBackend = _$httpBackend_;
    marketadService = _marketadService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should send a GET request to the backend when getAds method is called', function() {
    $httpBackend.expectGET('http://mepa-store-api.herokuapp.com/marketads/').respond(
      [{"id":"12345","title":"Advert one","description":"This is the first ad","priceCents":123,"imageUrl":null,"thumbnailUrl":null,"email":"me@home.com","phone":"555-1234"},
      {"id":"54321","title":"The second ad","description":"Second ad","priceCents":123.321,"imageUrl":null,"thumbnailUrl":null,"email":"she@home.com","phone":"555-1234"}]);
    marketadService.getAds().then(function(resp) {
      expect(resp.data.length).toBe(2);
    });
    $httpBackend.flush();
  });

  it('should send a GET request to the backend when getAd method is called with an argument', function() {
    var id = '12345';
    $httpBackend.expectGET('http://mepa-store-api.herokuapp.com/marketads/' + id).respond({"id":"12345","title":"Advert one","description":"This is the first ad","priceCents":123,"imageUrl":null,"thumbnailUrl":null,"email":"me@home.com","phone":"555-1234"});
    marketadService.getAd(id).then(function(resp) {
      expect(resp.data.title).toBe("Advert one");
    });
    $httpBackend.flush();
  });

  it('should send a POST request to the backend when addAd method is called', function() {
    var id = '123456';
    var marketad = {"title":"Advert one","description":"This is the first ad","priceCents":123,"imageUrl":null,"thumbnailUrl":null,"email":"me@home.com","phone":"555-1234"};
    $httpBackend.expectPOST('http://mepa-store-api.herokuapp.com/marketads/').respond({"id":id,"title":"Advert one","description":"This is the first ad","priceCents":123,"imageUrl":null,"thumbnailUrl":null,"email":"me@home.com","phone":"555-1234"});
    marketadService.addAd(marketad).then(function(resp) {
      expect(resp.data.id).toBe(id);
    });
    $httpBackend.flush();
  });

  it('should send a DELETE request the backend URI when deleteAd method is called with an argument', function() {
    var id = '123456';
    $httpBackend.expectDELETE('http://mepa-store-api.herokuapp.com/marketads/' + id).respond(200, {});
    marketadService.deleteAd(id).then(function(resp) {
      expect(resp.status).toBe(200);
    });
    $httpBackend.flush();
  });
});
