'use strict';

describe('adding, listing, deleting marketad', function() {

  beforeEach(function() {
    browser.get('index.html');
  });

  var marketad = {
    title: 'E2E ad',
    description: 'This is an ad for E2E testing',
    priceCents: 12345, // cents
    email: 'tester@e2e.invalid',
    phone: '555-8086',
    imageUrl: 'http://not.found/cat.gif',
    thumbnailUrl: 'http://not.found/cat.gif'
  };

  it('should be possible to add new marketad', function() {

    // Open the 'add' view.
    element(by.id('addButton')).click();

    // Fill the form.
    element(by.id('title')).sendKeys(marketad.title);
    element(by.id('description')).sendKeys(marketad.description);
    element(by.id('price')).sendKeys(marketad.priceCents / 100); // To whole EUR
    element(by.id('email')).sendKeys(marketad.email);
    element(by.id('phone')).sendKeys(marketad.phone);
    element(by.id('imageUrl')).sendKeys(marketad.imageUrl);
    element(by.id('thumbnailUrl')).sendKeys(marketad.thumbnailUrl);

    // Make sure the submit button is enabled.
    var submitButton = element(by.id('submitNewAd'));
    expect(submitButton.isEnabled()).toBe(true);

    // Click the submit button.
    submitButton.click().then(function() {
      // Make sure details view is rendered after successful upload.
      expect(browser.getLocationAbsUrl()).toMatch(/details\/[A-Za-z0-9]+/);
    });
  });

  it('should be possible to search the newly added marketad and show its details', function() {
    // Filter the marketads and click E2E marketad.
    element(by.model('searchText')).sendKeys('E2E ad').then(function() {
      element(by.id('titleLink')).click().then(function() {
        var euroPrice = String(marketad.priceCents / 100) + ' €';
        // Check that the detail fields are identical with the original values.
        expect(element(by.id('title')).getText()).toEqual(marketad.title);
        expect(element(by.id('description')).getText()).toEqual(marketad.description);
        expect(element(by.id('price')).getText()).toEqual(euroPrice);
        expect(element(by.id('email')).getText()).toEqual(marketad.email);
        expect(element(by.id('phone')).getText()).toEqual(marketad.phone);
        element(by.id('marketadImage')).getAttribute('src').then(function(d) {
          expect(d).toEqual(marketad.imageUrl);
        });
      });
    });
  });

  it('should be possible to delete newly added marketad', function() {
    // Search for the ad
    element(by.model('searchText')).sendKeys('E2E ad').then(function() {
      // Click the link to get to the details
      element(by.id('titleLink')).click().then(function() {
        expect(element(by.id('title')).getText()).toEqual(marketad.title);
        // Click the delete button
        element(by.id('deleteButton')).click().then(function() {
          // Check that the confirmation is shown
          expect(element(by.id('deleteSuccess')).isDisplayed()).toBe(true);
        });
      });
    });
  });
});
