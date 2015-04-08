'use strict';

var isArray = function isArray(arg) {
	return Array.isArray(arg);
};

var isFunction = function isFunction(arg) {
	return (typeof arg === 'function');
};

var isObject = function isObject(arg) {
	return (Object.prototype.toString.call(arg) === '[object Object]');
};

var isDate = function isDate(arg) {
	return (Object.prototype.toString.call(arg) === '[object Date]');
};

var isString = function isString(arg) {
	return (typeof arg === 'string');
};

var isNumber = function isNumber(arg) {
	return (typeof arg === 'number');
};

var isBoolean = function isBoolean(arg) {
	return (typeof arg === 'boolean');
};

var isUndefined = function isUndefined(arg) {
	return (typeof arg === 'undefined');
};

var isNull = function isNull(arg) {
	return (arg === null);
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

module.exports = {
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
	round: round
};
