/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
** IMPORTANT INFORMATION** 
Here you will find the rules in code of pico y placa, and the finction:
canBeOnTheRoad():
   - Return true if the car can be on the road
   - Return false if the car can not be on the road

--Rules
Pico y Placa hours:
 - at mornings from 7:00 - 9:30.
 - at afternoons from 16:00 - 19:30.

Can not be on the road at Pico y Placa hours:
 - Mondays: License Plates ending in 1 or 2.
 - Tuesday: License Plates ending in 3 or 4.
 - Wednesday: License Plates ending in 5 or 6.
 - Thursday: License Plates ending in 7 or 8.
 - Friday: License Plates ending in 9 or 0.

 Can be on the road:
 - Any car at any hour on weekends.
 - Any car out of the Pico y Placa hours.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

//Pico y Placa hours
const picoYplacaHoursRules = {
    morning: ['07:00', '09:30'],        //1. morning hours
    afternoon: ['16:00', '19:30'],      //2. afternoon hours  
}

//Can not be on the road at Pico y Placa hours
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

export {
        isPicoyPlacaHour,
        canBeOnTheRoad
    };