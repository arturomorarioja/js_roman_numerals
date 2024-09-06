'use strict';

/**
 * Conversion from Roman numeral to decimal
 * 
 * @author  Arturo Mora-Rioja
 * @version 1.0.0 February 2023
 * @version 1.0.1 September 2024. Specification checks added
 */

const isRepeated = (string, letter) => {
    const re = new RegExp(letter, 'g');
    const occurrences = string.match(re);
    if (occurrences === null) {
        return false;
    }
    if (occurrences.length === 1) {
        return false;
    }
    return true;
};

const roman2decimal = (number) => {

    const errorMessage = 'Badly formed Roman numeral';

    // Invalid symbols are removed from the string
    let clean_number = '';
    for (let letter in number) {
        if ('MDCLXVI'.includes(number[letter])) {
            clean_number += number[letter];
        }
    }
    number = clean_number;

    // V, L and D can never be repeated
    if (isRepeated(number, 'V') || 
        isRepeated(number, 'L') || 
        isRepeated(number, 'D')) {
            throw new Error(errorMessage);
        }
        
    // No digit can be repeated more than 3 times in a row
    if (number.includes('MMMM') ||
        number.includes('CCCC') ||
        number.includes('XXXX') ||
        number.includes('IIII')) {
            throw new Error(errorMessage);
    }

    // D cannot precede M
    if (number.includes('DM')) {
        throw new Error(errorMessage);
    }

    // L cannot precede M, D or C
    if (number.includes('LM') ||
        number.includes('LD') ||
        number.includes('LC')) {
            throw new Error(errorMessage);
    }

    // V cannot precede M, D, C, L or X
    if (number.includes('VM') ||
        number.includes('VD') ||
        number.includes('VC') ||
        number.includes('VL') ||
        number.includes('VX')) {
            throw new Error(errorMessage);
    }

    // X cannot precede D
    if (number.includes('XD')) {
            throw new Error(errorMessage);
    }

    // I cannot precede M, D, C, L
    if (number.includes('IM') ||
        number.includes('ID') ||
        number.includes('IC') ||
        number.includes('IL')) {
            throw new Error(errorMessage);
    }

    // Each letter of the Roman numeral is translated into its decimal value
    number = number.split('');
    let digits = [];
    number.forEach((letter) => {
        switch(letter) {
            case 'M': digits.push(1000); break;
            case 'D': digits.push(500); break;
            case 'C': digits.push(100); break;
            case 'L': digits.push(50); break;
            case 'X': digits.push(10); break;
            case 'V': digits.push(5); break;
            case 'I': digits.push(1); break;
            default: break; // Incorrect letters are simply ignored
        }
    });

    // Each value is added (if preceding a smaller or equal one) or subtracted (if preceded by a larger one)
    number = 0;
    const size = digits.length;
    for (let index = 0; index < size; index++) {
        if (size === index + 1) {
            number += digits[index];
        } else if (digits[index] < digits[index + 1]) {
            number -= digits[index];
        } else {
            number += digits[index];
        }
    }

    return number;
};

exports.roman2decimal = roman2decimal;