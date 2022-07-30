import { canBeOnTheRoadWithValidations } from "../src/app";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ** IMPORTANT INFORMATION ** 
//Here you will find validations of the main functions from app.js.
//this function combine the validations function plus the canBeOnTheRoad() function
// in order:
//canBeOnTheRoadWithValidations():
//   Return an array with the result of the validation and the error message
//   -- The first element of the array will return true if the car can be on the road
//   -- The first element of the array will return false if the car can not be on the road
//   -- The first element of the array will return null if the inputs have error
//   -- The second element of the array will return the error message depending of the inputs
//       if there are not error it will return a empty string 

// ** Note: **
// the validations function and canBeOnTheRoad() function are already tested on the 
// tests/validations.test.js file and test/picoyplaca.test.js file
// here we will make sure that the fusion of this finctions are working properly
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//--Manual validation
const plateInput = 'ABC-1112';
const dateInput = '2022-07-26';
const timeInput = '08:00';
const result = true;

describe(`Manual validation`, () => {
    test(`inputs:\n 
    \tplate: ${plateInput}\n
    \tdate: ${dateInput}\n
    \ttime: ${timeInput}
    \tresult: ${result}`, () => {
        expect(canBeOnTheRoadWithValidations(plateInput, dateInput, timeInput)[0]).toBe(result);
    });

});

describe(`Not allowed inputs`, () => {
    test('no input', () => {
        expect(canBeOnTheRoadWithValidations()[0]).toEqual(null);
    });

    test('undefined input', () => {
        expect(canBeOnTheRoadWithValidations(undefined, undefined, undefined)[0]).toEqual(null);
    });


    test('null input', () => {
        expect(canBeOnTheRoadWithValidations(null, null, null)[0]).toEqual(null);
    });

});

const validPlate = 'ABC-1112';
const validDate = '2022-07-26';
const validTime = '08:00';
const invalidPlate = 'ABC-1112q';
const invalidDate = '2022-07-40';
const invalidTime = '25:00';

describe(`Inputs with errors`, () => {
        
    test('plate: invalid, date: valid, time: valid', () => {
        expect(canBeOnTheRoadWithValidations(invalidPlate,validDate,validTime)[0]).toEqual(null);
    });

    test('plate: valid, date: invalid, time: valid', () => {
        expect(canBeOnTheRoadWithValidations(validPlate,invalidDate,validTime)[0]).toEqual(null);
    });

    test('plate: valid, date: valid, time: invalid', () => {
        expect(canBeOnTheRoadWithValidations(validPlate,validDate,invalidTime)[0]).toEqual(null);
    });

    test('plate: invalid, date: invalid, time: invalid', () => {
        expect(canBeOnTheRoadWithValidations(invalidPlate,invalidDate,invalidTime)[0]).toEqual(null);
    });

});

describe(`Valid inputs`, () => {
    test('plate: valid, date: valid, time: valid, can not be on the road', () => {
        expect(canBeOnTheRoadWithValidations('ABC-1111','2022-07-25','07:00')[0]).toEqual(false);
    });

    test('plate: valid, date: valid, time: valid, can be on the road', () => {
        expect(canBeOnTheRoadWithValidations('ABC-1112','2022-07-26','11:00')[0]).toEqual(true);
    });


});

