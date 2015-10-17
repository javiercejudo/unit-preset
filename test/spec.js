/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescaleUtil = require('rescale-util');
var unitPreset = require('../src/index');

describe('unit scale', function() {
  it('should be a preset', function() {
    rescaleUtil.isValidPreset(unitPreset).should.be.exactly(true);
  });

  it('should have the unit scale as the first element', function() {
    unitPreset[0].should.eql([0, 1]);
  });

  it('should have the unit scale as the second element', function() {
    unitPreset[1].should.eql([0, 1]);
  });
});
