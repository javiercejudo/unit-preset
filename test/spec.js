/*jshint node:true, mocha:true */

'use strict';

require('should');

var unitPreset = require('../src/index');

describe('unit scale', function() {
  it('should be an array', function() {
    ({}.toString.call(unitPreset)).should.equal('[object Array]');
  });

  it('should have two elements', function() {
    unitPreset.length.should.be.exactly(2);
  });

  it('should have the unit scale as the first element', function() {
    unitPreset[0].should.eql([0, 1]);
  });

  it('should have the unit scale as the second element', function() {
    unitPreset[1].should.eql([0, 1]);
  });
});
