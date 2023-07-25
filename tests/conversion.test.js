'use strict';
const {roman2decimal} = require('../conversion');

const romanNumerals = [
    {'value': '', 'expected': 0},
    {'value': 'M', 'expected': 1000},
    {'value': 'MD', 'expected': 1500},
    {'value': 'MCD', 'expected': 1400},
    {'value': 'MDCCCLXVII', 'expected': 1867},
    {'value': 'XCIV', 'expected': 94},
    {'value': 'CCC', 'expected': 300},
    {'value': 'I', 'expected': 1},
    {'value': 'X', 'expected': 10},
    {'value': 'IX', 'expected': 9},
    {'value': 'MMXXIII', 'expected': 2023},
    {'value': 'MMJXXOIII', 'expected': 2023},
    {'value': 'MXDIVII', 'expected': 1496}
];
describe.each(romanNumerals)('Roman to decimal', (numeral) => {
    it(`Roman ${numeral.value} is decimal ${numeral.expected}`, () => {
        expect(roman2decimal(numeral.value)).toBe(numeral.expected);
    });
});