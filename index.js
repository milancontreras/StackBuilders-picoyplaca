// //const {canBeOnTheRoadWithValidations} = require('./picoyplaca.js');
// import {canBeOnTheRoadWithValidations} from './picoyplaca.js';
// //--Inputs
// //
// var plateInput = 'ABC-1111';
// var dateInput = '2022-07-26';
// var timeInput = '08:00';

// //--Outputs
// //
// // result: true if the car can be on the road
// // result: false if the car can not be on the road
// //errorMessage: if at least one of the inputs is invalid, this will contain the error message
// var result;
// var errorMessage;
// [result, errorMessage] = canBeOnTheRoadWithValidations(plateInput, dateInput, timeInput);

// //-- Decorated Results (showed in console)
// //
// console.log("\n===== Result =====");
// console.log(`Inputs:\n  plate: ${plateInput.toUpperCase()}\n  date: ${dateInput}\n  time: ${timeInput}`);
// if(result !== null){
//     if(result){
//         console.log(`The car can be on the road`);
//     }else{
//         console.log(`The car can not be on the road`);
//     }   
// }else{
//     console.error(`ERROR: ${errorMessage}`);
// }


import {canBeOnTheRoadWithValidations} from './picoyplaca.js';


var form = document.getElementById('form');

        //take values from de Form
        form.addEventListener('submit', function(event){
            event.preventDefault();
            var plate = document.getElementById('plate').value;
            var date = document.getElementById('date').value;
            var time = document.getElementById('time').value;


            var result;
            var errorMessage;
            [result, errorMessage] = canBeOnTheRoadWithValidations(plate, date, time);

            //-- Results (showed in console)
            //
            console.log("\n===== Result =====");
            console.log(`Inputs:\n  plate: ${plate.toUpperCase()}\n  date: ${date}\n  time: ${time}`);
            if(result !== null){
                if(result){
                    document.getElementById('result').value = `The car can be on the road`;
                    console.log(`The car can be on the road`);
                }else{
                    document.getElementById('result').value = `The car can not be on the road`;
                    console.log(`The car can not be on the road`);
                }   
            }else{
                document.getElementById('result').value = `ERROR: ${errorMessage}`;
                console.error(`ERROR: ${errorMessage}`);
                
            }
        });