const {canBeOnTheRoadWithValidations} = require('./picoyplaca.js');
//--Inputs
//
plateInput = 'ABC-1111';
dateInput = '2022-07-26';
timeInput = '08:00';

//--Outputs
//
// result: true if the car can be on the road
// result: false if the car can not be on the road
//errorMessage: if at least one of the inputs is invalid, this will contain the error message
[result, errorMessage] = canBeOnTheRoadWithValidations(plateInput, dateInput, timeInput);

//-- Decorated Results (showed in console)
//
console.log("\n===== Result =====");
console.log(`Inputs:\n  plate: ${plateInput.toUpperCase()}\n  date: ${dateInput}\n  time: ${timeInput}`);
if(result !== null){
    if(result){
        console.log(`The car can be on the road`);
    }else{
        console.log(`The car can not be on the road`);
    }   
}else{
    console.error(`ERROR: ${errorMessage}`);
}