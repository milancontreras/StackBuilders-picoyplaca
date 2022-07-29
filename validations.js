
//
//--Licence Plate

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
    if(!plate.match(/^[A-Z]{3}-[0-9]{3,4}$/)) {
        return false;
    }

    return true;
}


//
//--Date

function validateDate(date){ 

    //check if the date is null or empty
    if(date === null || date === '') {
        return false;
    }

    //check if the date type if different from string
    if(typeof date!== 'string')  {    
        return false;
    }

    //check if the date is a valid date
    if(new Date(date) == 'Invalid Date') {
        return false;
    }else{
        return true;
    }
}



module.exports = { 
    validateLicencePlate,
    validateDate
}