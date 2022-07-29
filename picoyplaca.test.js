const {canBeOnTheRoad} = require('./picoyplaca.js');

plateInput = 'ABC-1111';
dateInput = '2022-07-26';
timeInput = '08:00';

plateInput2 = 'ABC-1111';
dateInput2 = '2022-07-25';
timeInput2 = '08:00';

describe('validate if can be on the road', () => {
    test('car can be on the road', () => {
        expect(canBeOnTheRoad(plateInput, dateInput, timeInput)).toBe(true);
    });

    test('car can`t be on the road', () => {
        expect(canBeOnTheRoad(plateInput2, dateInput2, timeInput2)).toBe(false);
    });

});