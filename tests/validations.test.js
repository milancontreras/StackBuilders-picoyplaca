//const{ validateLicencePlate, validateDate, validateTime} = require('./validations.js');
 import { validateLicencePlate, validateDate, validateTime} from '../src/validations.js';
//--Licence Plate
//
//Test group 1: Check if the Licence Plate is a valid Licence Plate
describe('validate Licence Plate', () => {

    test('Correct Licence Plate 4 numbers', () => {
        expect(validateLicencePlate('ABC-1234')).toBe(true);
    });

    test('Correct Licence Plate 3 numbers', () => {
        expect(validateLicencePlate('ABC-123')).toBe(true);
    });

    test('Incorrect Licence Plate', () => {
        expect(validateLicencePlate('ABC2345')).toBe(false);
    });

    test('undefine Licence Plate', () => {
        expect(validateLicencePlate()).toBe(false);
    });
    
    test('empty Licence Plate', () => {
        expect(validateLicencePlate('')).toBe(false);
    });
    
    test('null Licence Plate', () => {
        expect(validateLicencePlate(null)).toBe(false);
    });
    
    test('Licence Plate with > 4 letters', () => {
        const letters = ["AAAA", "AAAAA","AAAAAA","AAAAAAA","AAAAAAAA"]
        letters.forEach(letter => {
            expect(validateLicencePlate(letter)).toBe(false);
        }
        );
    });
    
    test('Licence Plate > 4 numbers', () => {
        const numbers = ["11111", "111111","1111111","11111111","111111111"]
        numbers.forEach(combinationOfNumbers => {
            expect(validateLicencePlate('AAA-'+combinationOfNumbers)).toBe(false);
        }
        );
    });

    test('empty array', () => {   
            expect(validateLicencePlate([])).toBe(false);   
    });

    test('full array', () => {   
        expect(validateLicencePlate(['ABC-1234'])).toBe(false);   
    });

});

//--Date
//
//Test group 2: Check if the Date is a valid Date
describe('validate Date', () => { 
    test('valid Date', () => {
        expect(validateDate('2022-01-01')).toBe(true);
    });

    test('invalid Date', () => {
        expect(validateDate('2022-50-01')).toBe(false);
    });

    test('undefine value', () => {
        expect(validateDate()).toBe(false);
    });

    test('empty value', () => {
        expect(validateDate('')).toBe(false);
    });

    test('null value', () => {
        expect(validateDate(null)).toBe(false);
    });

    test("empty array", () => {
        expect(validateDate([])).toBe(false);
    });

    test("full array", () => {  
        expect(validateDate(['2022-01-01'])).toBe(false);   
    });
});

//--Time
//
//Test group 3: Check if the Time is a valid Time
describe('validate Time', () => {
    test('valid Time', () => {
        expect(validateTime('12:00')).toBe(true);
    });
    
    test('invalid Time', () => {
        expect(validateTime('12:60')).toBe(false);
    });
    
    test('undefine value', () => {
        expect(validateTime()).toBe(false);
    });
    
    test('empty value', () => {
        expect(validateTime('')).toBe(false);
    });
    
    test('null value', () => {
        expect(validateTime(null)).toBe(false);
    });
    
    test("empty array", () => {
        expect(validateTime([])).toBe(false);
    });
    
    test("full array", () => {  
        expect(validateTime(['12:00'])).toBe(false);   
    });

});

