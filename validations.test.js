const{ validateLicencePlate } = require('./validations');

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
        letters = ["AAAA", "AAAAA","AAAAAA","AAAAAAA","AAAAAAAA"]
        letters.forEach(letter => {
            expect(validateLicencePlate(letter)).toBe(false);
        }
        );
    });
    
    test('Licence Plate > 4 numbers', () => {
        numbers = ["11111", "111111","1111111","11111111","111111111"]
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

