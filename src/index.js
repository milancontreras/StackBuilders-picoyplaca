import {canBeOnTheRoadWithValidations} from '../src/picoyplaca.js';


var form = document.getElementById('form');

        //take values from de Form
        form.addEventListener('submit', function(event){
            event.preventDefault();
            document.getElementById('result').value = ``;

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