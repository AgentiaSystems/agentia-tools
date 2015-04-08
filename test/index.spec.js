'use strict';

var chai = require('chai');
var expect = chai.expect;

var utils = require('../');

describe('agentia-utilities', function() {

  describe('.isArray()', function() {

    it('shoud return true for array-literal args', function() {
      expect(utils.isArray([])).to.be.true;
    });

    it('shoud return true for array-object args', function() {
      expect(utils.isArray(new Array())).to.be.true;
    });

    it('shoud return false for non-array args', function() {
      expect(utils.isArray({})).to.be.false;
      expect(utils.isArray(0)).to.be.false;
      expect(utils.isArray(true)).to.be.false;
      expect(utils.isArray('string')).to.be.false;
      expect(utils.isArray(function() {})).to.be.false;
      expect(utils.isArray(new Date())).to.be.false;
      expect(utils.isArray(undefined)).to.be.false;
    });

  });

  describe('.isFunction()', function() {

    it('shoud return true for function args', function() {
      expect(utils.isFunction(function() {})).to.be.true;
    });

    it('shoud return false for non-function args', function() {
      expect(utils.isFunction({})).to.be.false;
      expect(utils.isFunction(0)).to.be.false;
      expect(utils.isFunction(true)).to.be.false;
      expect(utils.isFunction('string')).to.be.false;
      expect(utils.isFunction([])).to.be.false;
      expect(utils.isFunction(new Date())).to.be.false;
      expect(utils.isFunction(undefined)).to.be.false;
    });

  });

  describe('.isObject()', function() {

    it('shoud return true for object args', function() {
      expect(utils.isObject({})).to.be.true;
    });

    it('shoud return false for non-object args', function() {
      expect(utils.isObject(0)).to.be.false;
      expect(utils.isObject(true)).to.be.false;
      expect(utils.isObject('string')).to.be.false;
      expect(utils.isObject([])).to.be.false;
      expect(utils.isObject(function() {})).to.be.false;
      expect(utils.isObject(new Date())).to.be.false;
      expect(utils.isObject(undefined)).to.be.false;
    });

  });

  describe('.isDate()', function() {

    it('shoud return true for date args', function() {
      expect(utils.isDate(new Date())).to.be.true;
    });

    it('shoud return false for non-date args', function() {
      expect(utils.isDate(0)).to.be.false;
      expect(utils.isDate(true)).to.be.false;
      expect(utils.isDate('string')).to.be.false;
      expect(utils.isDate([])).to.be.false;
      expect(utils.isDate(function() {})).to.be.false;
      expect(utils.isDate({})).to.be.false;
      expect(utils.isDate(undefined)).to.be.false;
    });

  });

  describe('.isString()', function() {

    it('shoud return true for strig args', function() {
      expect(utils.isString('string')).to.be.true;
    });

    it('shoud return false for non-string args', function() {
      expect(utils.isString(0)).to.be.false;
      expect(utils.isString(true)).to.be.false;
      expect(utils.isString([])).to.be.false;
      expect(utils.isString(function() {})).to.be.false;
      expect(utils.isString({})).to.be.false;
      expect(utils.isString(new Date())).to.be.false;
      expect(utils.isString(undefined)).to.be.false;
    });

  });

  describe('.isNumber()', function() {

    it('shoud return true for numberic args', function() {
      expect(utils.isNumber(0)).to.be.true;
    });

    it('shoud return false for non-numeric args', function() {
      expect(utils.isNumber({})).to.be.false;
      expect(utils.isNumber(true)).to.be.false;
      expect(utils.isNumber('string')).to.be.false;
      expect(utils.isNumber(function() {})).to.be.false;
      expect(utils.isNumber(new Date())).to.be.false;
      expect(utils.isNumber([])).to.be.false;
      expect(utils.isNumber(undefined)).to.be.false;
    });

  });

  describe('.isBoolean()', function() {

    it('shoud return true for boolean args', function() {
      var num = 1;

      expect(utils.isBoolean(true)).to.be.true;
      expect(utils.isBoolean(false)).to.be.true;
      expect(utils.isBoolean(num === 1)).to.be.true;
      expect(utils.isBoolean(num === 0)).to.be.true;
    });

    it('shoud return false for non-boolean args', function() {
      expect(utils.isBoolean({})).to.be.false;
      expect(utils.isBoolean('string')).to.be.false;
      expect(utils.isBoolean(function() {})).to.be.false;
      expect(utils.isBoolean(new Date())).to.be.false;
      expect(utils.isBoolean([])).to.be.false;
      expect(utils.isBoolean(0)).to.be.false;
      expect(utils.isBoolean(undefined)).to.be.false;
    });

  });

  describe('.isUndefined()', function() {

    it('shoud return true for boolean args', function() {
      expect(utils.isUndefined(undefined)).to.be.true;
    });

    it('shoud return false for non-boolean args', function() {
      expect(utils.isUndefined({})).to.be.false;
      expect(utils.isUndefined(true)).to.be.false;
      expect(utils.isUndefined('string')).to.be.false;
      expect(utils.isUndefined(function() {})).to.be.false;
      expect(utils.isUndefined(new Date())).to.be.false;
      expect(utils.isUndefined([])).to.be.false;
      expect(utils.isUndefined(0)).to.be.false;
    });

  });

  describe('.isNull()', function() {

    it('shoud return true for null args', function() {
      expect(utils.isNull(null)).to.be.true;
    });

    it('shoud return false for non-boolean args', function() {
      expect(utils.isNull({})).to.be.false;
      expect(utils.isNull(true)).to.be.false;
      expect(utils.isNull('string')).to.be.false;
      expect(utils.isNull(function() {})).to.be.false;
      expect(utils.isNull(new Date())).to.be.false;
      expect(utils.isNull([])).to.be.false;
      expect(utils.isNull(0)).to.be.false;
      expect(utils.isNull(undefined)).to.be.false;
    });

  });

  describe('.exists()', function() {

    it('shoud return true for non-null and non-undefined args', function() {
      expect(utils.exists({})).to.be.true;
      expect(utils.exists(true)).to.be.true;
      expect(utils.exists('string')).to.be.true;
      expect(utils.exists(function() {})).to.be.true;
      expect(utils.exists(new Date())).to.be.true;
      expect(utils.exists([])).to.be.true;
      expect(utils.exists(0)).to.be.true;
    });

    it('shoud return false for null and undefined args', function() {
      expect(utils.exists(null)).to.be.false;
      expect(utils.exists(undefined)).to.be.false;
    });

  });

  describe('.randomString()', function() {

    it('shoud return a 20 char string, when length is not specified', function() {
      expect(utils.randomString().length).to.equal(20);
    });

    it('shoud return a string of specified length', function() {
      expect(utils.randomString(5).length).to.equal(5);
      expect(utils.randomString(10).length).to.equal(10);
      expect(utils.randomString(25).length).to.equal(25);
      expect(utils.randomString(50).length).to.equal(50);
      expect(utils.randomString(100).length).to.equal(100);
    });

    it('shoud return different string on successive calles', function() {
      expect(utils.randomString()).not.to.equal(utils.randomString());
      expect(utils.randomString()).not.to.equal(utils.randomString());
      expect(utils.randomString()).not.to.equal(utils.randomString());
      expect(utils.randomString()).not.to.equal(utils.randomString());
      expect(utils.randomString()).not.to.equal(utils.randomString());
    });

  });

  describe('.round()', function() {

    it('shoud round to nearest integer, when decimals not specified', function () {
      expect(utils.round(1111.11111)).to.equal(1111);
    });

    it('shoud round to the number of decimals, when decimals is positive', function () {
      expect(utils.round(1111.11111, 1)).to.equal(1111.1);
      expect(utils.round(1111.11111, 2)).to.equal(1111.11);
      expect(utils.round(1111.11111, 3)).to.equal(1111.111);
    });

    it('shoud round to a power of 10, when decimals is negative', function () {
      expect(utils.round(1111.11111, -1)).to.equal(1110);
      expect(utils.round(1111.11111, -2)).to.equal(1100);
      expect(utils.round(1111.11111, -3)).to.equal(1000);
    });

  });

});
