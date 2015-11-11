'use strict';

describe('kauppapaikka main page', function() {

  var addButton = element(by.id('addButton'));
  var marketads = element.all(by.repeater('item in marketads | filter:searchText'));

  beforeEach(function() {
    browser.get('index.html');
  });

  it('should automatically redirect to /ads when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/ads");
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Kauppapaikka');
  });

  it('should have a "add advert" button in the header', function() {
    expect(addButton.isPresent()).toBe(true);
  });

  it('should show a list of marketads', function() {
    expect(marketads.count()).toBeGreaterThan(1);
  });

  it('should have a search panel and a form', function() {
    var searchPanel = element(by.id('searchPanel'));
    var searchForm = element(by.id('searchForm'));

    expect(searchPanel.isPresent()).toBe(true);
    expect(searchForm.isPresent()).toBe(true);
  });

  it('should filter the marketad list with the search field', function() {
    var searchField = element(by.model('searchText'));

    var adCountBefore = marketads.count();
    searchField.sendKeys('test').then(function() {
      var adCountAfter = marketads.count();
      expect(adCountAfter).toBeLessThan(adCountBefore);
    });

    searchField.sendKeys("probably won't match with anything").then(function() {
      var adCountAfter = marketads.count();
      expect(adCountAfter).toEqual(0);
    });
  });

  it('should open a details page when a marketad title is clicked', function() {
    var ad = marketads.first();
    ad.element(by.binding('item.title')).click().then(function() {
      expect(browser.getCurrentUrl()).toMatch(/details\/[A-Za-z0-9]+/);
    });
  });

});
