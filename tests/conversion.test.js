'use strict';
const {roman2decimal} = require('../conversion');

const correctRomanNumerals = [
    {'value': '', 'expected': 0},               // Valid lower boundary
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
    {'value': 'MMMCMXCIX', 'expected': 3999},   // Valid upper boundary
];
describe.each(correctRomanNumerals)('Roman to decimal passes', (numeral) => {
    it(`Roman ${numeral.value} is decimal ${numeral.expected}`, () => {
        expect(roman2decimal(numeral.value)).toBe(numeral.expected);
    });
});

const badlyFormedRomanNumerals = [
    {'value': 'MXDIVII'},
    {'value': 'VV'},
    {'value': 'MDVVI'},
    {'value': 'MDVXVI'},
    {'value': 'LL'},
    {'value': 'MDLLX'},
    {'value': 'MDLXLV'},
    {'value': 'DD'},
    {'value': 'MDDCX'},
    {'value': 'MDCDXVI'},
    {'value': 'IIII'},
    {'value': 'XVIIII'},
    {'value': 'CLIIIIX'},
    {'value': 'XXXX'},
    {'value': 'MDXXXX'},
    {'value': 'MCXXXXV'},
    {'value': 'CCCC'},
    {'value': 'MDCCCC'},
    {'value': 'MCCCCDV'},
    {'value': 'MMMM'},        // Invalid upper boundary
    {'value': 'MMMMCL'},
    {'value': 'DM'},
    {'value': 'LM'},
    {'value': 'LD'},
    {'value': 'LC'},
    {'value': 'VM'},
    {'value': 'VD'},
    {'value': 'VC'},
    {'value': 'VL'},
    {'value': 'VX'},
    {'value': 'XD'},
    {'value': 'IM'},
    {'value': 'ID'},
    {'value': 'IC'},
    {'value': 'IL'},
]
describe.each(badlyFormedRomanNumerals)('Badly formed Roman to decimal raises exception', (numeral) => {
    it(`Roman ${numeral.value} is badly formed`, () => {
        expect(() => roman2decimal(numeral.value)).toThrow();
    });
});