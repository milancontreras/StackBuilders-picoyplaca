
//
//--Licence Plate

//Return true if is a valid Licence Plate and false if not
function validateLicencePlate(plate) {
    //Example Plate Format: ABC-1231 || ABC-123
    if(plate.length === (0) ) {
        return false;
    }

    if((plate.length != 7)) {
        if(plate.length != 8){
            return false;
        }
    }
    if(!plate.match(/^[A-Z]{3}-[0-9]{3,4}$/)) {
        return false;
    }
    return true;
}


module.exports = { 
    validateLicencePlate
}