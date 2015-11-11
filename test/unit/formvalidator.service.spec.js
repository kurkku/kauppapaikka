'use strict';

describe('marketadValidator', function() {
  var marketadValidator;

  beforeEach(module('kauppapaikka'));

  beforeEach(inject(function(_marketadValidator_) {
    marketadValidator = _marketadValidator_;
  }));

  it('should not allow invalid email addresses', function() {
    var emailAddresses = [
      '',
      'foo',
      'foo@bar',
      'foo@.net',
      'test@testcom',
      'test @test.com',
    ];

    var marketad = {
      title: 'title',
      description: 'desc',
      price: 123,
      phone: ''
    };

    for (var e in emailAddresses) {
      marketad.email = emailAddresses[e];
      var valid = marketadValidator(marketad);
      expect(valid).toBe(false);
    }
  });

  it('should allow valid email addresses', function() {
    var emailAddresses = [
      'foo@bar.net',
      'f-f@bar.net',
      'f.f.f@test.com',
      'TEST@test.com',
    ];

    var marketad = {
      title: 'title',
      description: 'desc',
      price: 123,
      email: null,
      phone: '123456'
    };

    for (var e in emailAddresses) {
      marketad.email = emailAddresses[e];
      var valid = marketadValidator(marketad);
      expect(valid).toBe(true);
    }
  });

  it('should not allow missing values', function() {
    var ads = [
      {description: 'desc', price: 123, email: 'test@test.test', phone: '123456' },
      {title: 'title', price: 123, email: 'test@test.test', phone: '123456' },
      {title: 'title', description: 'desc', email: 'test@test.test', phone: '123456' },
      {title: 'title', description: 'desc', price: 123, phone: '123456' },
      {title: 'title', description: 'desc', price: 123, email: 'test@test.test' }
    ];

    for (var i in ads) {
      var valid = marketadValidator(ads[i]);
      expect(valid).toBe(false);
    }
  });
});
