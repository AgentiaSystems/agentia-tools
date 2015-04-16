'use strict';

var typeOf = function typeOf(value) {
  return Object.prototype.toString.call(value)
    .replace(/^\[.+\s(.+?)\]$/, '$1')
    .toLowerCase();
};

var isArray = function isArray(arg) {
  return Array.isArray(arg);
};

var isFunction = function isFunction(arg) {
  return (typeOf(arg) === 'function');
};

var isObject = function isObject(arg) {
  return (typeOf(arg) === 'object');
};

var isDate = function isDate(arg) {
  return (typeOf(arg) === 'date');
};

var isString = function isString(arg) {
  return (typeOf(arg) === 'string');
};

var isNumber = function isNumber(arg) {
  return (typeOf(arg) === 'number');
};

var isBoolean = function isBoolean(arg) {
  return (typeOf(arg) === 'boolean');
};

var isUndefined = function isUndefined(arg) {
  return (typeOf(arg) === 'undefined');
};

var isNull = function isNull(arg) {
  return (typeOf(arg) === 'null');
};

var exists = function exists(arg) {
  return !isUndefined(arg) && !isNull(arg);
};

var randomString = function randomString(length, characters) {

  var string = '';

  length = !length ? 20 : length;
  characters = characters || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';

  for (var i = 0; i < length; i++) {
    string += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return string;

};

var round = function round(num, exp) {
  exp = !exp ? 0 : exp;
  var multiplier = Math.pow(10, exp);
  return Math.floor(num * multiplier) / multiplier;
};

var defineProp = function defineProp(obj, name, getter, setter) {
  var options = {
    configurable: true,
    enumerable: true
  };

  if (isFunction(getter)) {
    options.get = getter;
  }

  if (!isFunction(getter) && exists(getter)) {
    options.value = getter;
  }

  if (isFunction(setter)) {
    options.set = setter;
  }

  Object.defineProperty(obj, name, options);
};

var getParamNames = function getParamNames(fn) {
  var params;

  if (isFunction(fn)) {
    fn = fn.toString();
    params = fn.slice(fn.indexOf('(') + 1, fn.indexOf(')')).match(/([^\s,]+)/g);
  }
  return isArray(params) ? params : [];
};

module.exports = {
  typeOf: typeOf,
  isArray: isArray,
  isFunction: isFunction,
  isObject: isObject,
  isDate: isDate,
  isString: isString,
  isNumber: isNumber,
  isBoolean: isBoolean,
  isUndefined: isUndefined,
  isNull: isNull,
  exists: exists,
  randomString: randomString,
  round: round,
  defineProp: defineProp,
  getParamNames: getParamNames
};
