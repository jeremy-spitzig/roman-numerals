var romanNumerals = require('./roman-numerals')
var assert = require('assert');
describe('Roman Numerals', function () {
  describe('#fromDecimal', function () {
    it('should return I when passed 1', function () {
        assert.equal(romanNumerals.fromDecimal(1), 'I');
    });
    it('should return V when passed 5', function () {
        assert.equal(romanNumerals.fromDecimal(5), 'V');
    });
    it('should return X when passed 10', function () {
        assert.equal(romanNumerals.fromDecimal(10), 'X');
    });
    it('should return L when passed 50', function () {
        assert.equal(romanNumerals.fromDecimal(50), 'L');
    });
    it('should return C when passed 100', function () {
        assert.equal(romanNumerals.fromDecimal(100), 'C');
    });
    it('should return D when passed 500', function () {
        assert.equal(romanNumerals.fromDecimal(500), 'D');
    });
    it('should return M when passed 1000', function () {
        assert.equal(romanNumerals.fromDecimal(1000), 'M');
    });
    it('should return III when passed 3', function () {
        assert.equal(romanNumerals.fromDecimal(3), 'III');
    });
    it('should return IV when passed 4', function () {
        assert.equal(romanNumerals.fromDecimal(4), 'IV');
    });
    it('should return VIII when passed 8', function () {
        assert.equal(romanNumerals.fromDecimal(8), 'VIII');
    });
    it('should return IX when passed 9', function () {
        assert.equal(romanNumerals.fromDecimal(9), 'IX');
    });
    it('should return XXX when passed 30', function () {
        assert.equal(romanNumerals.fromDecimal(30), 'XXX');
    });
    it('should return XL when passed 40', function () {
        assert.equal(romanNumerals.fromDecimal(40), 'XL');
    });
    it('should return LXXX when passed 80', function () {
        assert.equal(romanNumerals.fromDecimal(80), 'LXXX');
    });
    it('should return XC when passed 90', function () {
        assert.equal(romanNumerals.fromDecimal(90), 'XC');
    });
    it('should return CCC when passed 300', function () {
        assert.equal(romanNumerals.fromDecimal(300), 'CCC');
    });
    it('should return CD when passed 400', function () {
        assert.equal(romanNumerals.fromDecimal(400), 'CD');
    });
    it('should return DCCC when passed 800', function () {
        assert.equal(romanNumerals.fromDecimal(300), 'DCCC');
    });
    it('should return CM when passed 900', function () {
        assert.equal(romanNumerals.fromDecimal(400), 'CM');
    });
  });
});