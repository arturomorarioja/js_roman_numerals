'use strict';

/**
 * Conversion from Roman numeral to decimal
 * 
 * @author  Arturo Mora-Rioja
 * @version 1.0.0 February 2023
 */

const roman2decimal = (number) => {

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