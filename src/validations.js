/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
** IMPORTANT INFORMATION** 
Here you will find the functions for validating the inputs from the user:
validateLicencePlate():
  - Return true if the plate is valid
  - Return false if the plate is invalid
validateDate():
  - Return true if the date is valid
  - Return false if the date is invalid
validateTime():
  - Return true if the time is valid
  - Return false if the time is invalid
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/


//--Licence Plate
//
//Return true if is a valid Licence Plate and false if not
function validateLicencePlate(plate) {
    //Example Plate Format: ABC-1231 || ABC-123

    //Check if the plate is undefined
    if(typeof plate === 'undefined') {
        return false;
    }

    //Check if the plate is empty
    if( plate === null || plate === '') {
        return false;
    }

    //Check if the plate has 0 characters  
    if(plate.length === (0) ) {
        return false;
    }

    //Check if the plate has more than 7 or 8 characters
    if((plate.length != 7)) {
        if(plate.length != 8){
            return false;
        }
    }


    //Check the plate format
    if(!plate.toUpperCase().match(/^[A-Z]{3}-[0-9]{3,4}$/)) {
        return false;
    }

    return true;
}

//--Date
//
//Return true if is a valid Date and false if not   
function validateDate(date){ 

    //check if the date is null or empty
    if(date === null || date === '') {
        return false;
    }

    //check if the date type if different from string
    if(typeof date!== 'string')  {    
        return false;
    }

    if(!date.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
        return false;
    }

    //check if the date is a valid date
    if(new Date(date) == 'Invalid Date') {
        return false;
    }else{
        return true;
    }
}


//--Time
//
//Return true if is a valid Time and false if not
function validateTime(time){
    //time format: HH:MM

    //check if the timeundefined
    if(typeof time === 'undefined') {
        return false;
    }

    //check if the time is empty or null
    if(time === null || time === '') {
        return false;
    }

    //check if the time length is 0
    if(time.length == 0) {
        return false;
    }

    //check if the time characters are 5
    if(time.length != 5) {
        return false;
    }
   
    //check if the time format is HH:MM
    if(!time.match(/^[0-9]{2}:[0-9]{2}$/)) {
        return false;
    }else{
        var hours = time.substring(0,2);
        var minutes = time.substring(3,5);

        //check if the hours are between 0 and 23 and the minutes between 0 and 59
        if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0) {
            return false;
        }
    }

    return true;
}

export { validateLicencePlate, validateDate, validateTime }