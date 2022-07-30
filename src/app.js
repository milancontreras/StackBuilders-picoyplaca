import {canBeOnTheRoad} from '../src/picoyplaca.js';
import { validateLicencePlate, validateDate, validateTime} from '../src/validations.js';
/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
** IMPORTANT INFORMATION** 
Here you will find the main function for the proyect.
This function combines the validation functions and the canBeOnTheRoad() function
in order to validate the inputs and return the result of the validation.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

//Recieve plate, date and time as imputs (doesn't matter if they are wrong inputs)
//Return an array with the result of the validation and the error message
//   -- The first element of the array will return true if the car can be on the road
//   -- The first element of the array will return false if the car can not be on the road
//   -- The second element of the array will return the error message depending of the inputs errors
function canBeOnTheRoadWithValidations(plate, date, time){
    var ErrorMessage= "";
    // Step 1.
    // Validate plate
    var flagPlate = false;
    if(validateLicencePlate(plate)) {
        //console.log("The plate is valid");
        flagPlate = true;
    }else {
        //console.log("The plate is invalid");
        if(plate === null || typeof plate  !== 'string') {
            ErrorMessage = ErrorMessage.concat(`The plate is invalid: ${plate}\n`);
        }else{
            ErrorMessage = ErrorMessage.concat(`The plate is invalid: ${plate.toUpperCase()}\n`);
        }

        
        flagPlate = false;
    }

    // Step 2.
    //Validate date
    var flagDate= false;
    if(validateDate(date)) {
        //console.log("The date is valid");
        flagDate= true;
    }else { 
        //console.log("The date is invalid");
        ErrorMessage = ErrorMessage.concat(`The date is invalid: ${date}\n`);
        flagDate= false;
    }


    // Step 3.
    //Validate hour
    var flagTime = false;
    if(validateTime(time)) {
        //console.log("The hour is valid");
        flagTime = true;
    }else{
        //console.log("The hour is invalid");
        ErrorMessage = ErrorMessage.concat(`The hour is invalid: ${time}\n`);
        flagTime = false;
    }

    
    // Step 4.
    //Validate if the car can be or not on the road
    if(!(flagPlate && flagDate && flagTime)) {

        return [null, ErrorMessage];
        //console.log(`ERROR: ${ErrorMessage}`);
    }else{        
        if(canBeOnTheRoad(plate.toUpperCase(), date, time)){
            //console.log("Can be on the road");
            return [true, ErrorMessage];
        }else{
            return [false, ErrorMessage];
        }
    }

    
}

export {canBeOnTheRoadWithValidations};