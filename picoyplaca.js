//--Rules
//
// 1. The car is allowed to drive at the morning if the time is between 7:00 and 09:30.
// 2. The car is allowed to drive at the afternoon if the time is between 16:00 and 19:30.
const picoYplacaHoursRules = {
    morning: ['07:00', '09:30'],        //1. morning hours
    afternoon: ['16:00', '19:30'],      //2. afternoon hours  
}

const picoyplacaDayRules = {
    0: [1,2],   //0. Monday
    1: [3,4],   //1. Tuesday
    2: [5,6],   //2. Wednesday
    3: [7,8],   //3. Thursday
    4: [9,0],   //4. Friday
    5: [-1],    //5. Saturday
    6: [-1],    //6. Sunday
}

//--Functions
//

//Given a date of the week return the last digit of the license plate that can't be on the road
function platesThatCantBeOnTheRoad(date) {
    var day = new Date(date).getDay();
    return picoyplacaDayRules[day]
} 

//Given a hour return if it is Pico y Placa time
function isPicoyPlacaHour (hour){  
    //check if the hour is between the morning hours        
    if(hour >= picoYplacaHoursRules.morning[0] && hour <= picoYplacaHoursRules.morning[1]) {
        return true;
    }
    //check if the hour is between the afternoon hours
    if(hour >= picoYplacaHoursRules.afternoon[0] && hour <= picoYplacaHoursRules.afternoon[1]) {
        return true;
    }
    return false;
}

//Given a license(string) plate return the last digit as number type
function lastDigitPlate(plate){
    return parseInt(plate.substring(plate.length - 1));
}



//--Logic function
//

//Given a license, plate and time return true if the car can be on the road and false if not
function canBeOnTheRoad(plate, date, time) {  

    //Check if the hour is Pico y Placa time
    if(isPicoyPlacaHour(time)) {

        //Check if the last digit of the plate is in the list of plates that can't be on the road that specific day
        if(platesThatCantBeOnTheRoad(date).includes(lastDigitPlate(plate))) {
            return false;
        }else{
            return true;
        }         
    }else{
        return true;     
    }
}

module.exports = { 
    canBeOnTheRoad,
    isPicoyPlacaHour
  }