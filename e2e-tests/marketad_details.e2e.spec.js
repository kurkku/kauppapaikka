'use strict';

describe('kauppapaikka details page', function() {
  var marketads = element.all(by.repeater('item in marketads | filter:searchText'));
  var title = element(by.id('title'));
  var description = element(by.id('description'));
  var price = element(by.id('price'));
  var email = element(by.id('email'));
  var phone = element(by.id('phone'));

  beforeEach(function() {
    // Open the details page of the first marketad first.
    browser.get('index.html').then(function() {
      marketads.first().element(by.binding('item.title')).click();
    });
  });

  it('should redirect to /details/:id', function() {
    expect(browser.getLocationAbsUrl()).toMatch(/details\/[A-Za-z0-9]+/);
  });

  it('should have a title, description, price, email, and phone fields with content', function() {
    var titleBind = element(by.binding('marketad.title')).getText();
    var descBind = element(by.binding('marketad.description')).getText();
    expect(title.getText()).toEqual(titleBind);
    expect(description.getText()).toEqual(descBind);
    expect(price.getText()).toMatch(/[0-9]?(\.[0-9]+)?/);
    expect(email.getText()).toMatch(/@/);
    phone.getText().then(function(text) {
      expect(text.length).toBeGreaterThan(0);
    });
  });

  it('should have a delete button', function() {
    expect(element(by.id('deleteButton')).isPresent()).toBe(true);
  });
});
