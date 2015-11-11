'use strict';

describe('kauppapaikka filters', function() {
  var $filter;

  beforeEach(module('kauppapaikka'));

  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
  }));

  describe('prettyEuro', function() {
    it('should convert euro cents to whole euros, and add an euro sign', function() {
      var euroCents = 12345.6;

      var whole = $filter('prettyEuro')(euroCents);

      expect(whole).toEqual("123.456 €");
    });
  });
});
