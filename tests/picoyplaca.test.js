import {canBeOnTheRoad,isPicoyPlacaHour} from '../src/picoyplaca.js';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ** IMPORTANT INFORMATION ** 
//Here you will find validations of the main function from  picoyplaca.js:
//canBeOnTheRoad():
//   - Return true if the car can be on the road
//   - Return false if the car can not be on the road
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//--Inputs with no format or sintaxis erros (canBeOnTheRoad() does not control the inputs erros)
//

//--Manual validation
const plateInput = 'ABC-1112';
const dateInput = '2022-07-26';
const timeInput = '08:00';
const result = true;

describe(`Manual validation`, () => {
    test(`inputs:\n 
    \tplate: ${plateInput}\n
    \tdate: ${dateInput}\n
    \ttime: ${timeInput}
    \tresult: ${result}`, () => {
        expect(canBeOnTheRoad(plateInput, dateInput, timeInput)).toBe(result);
    });

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//--Generation of data for Cases tests
//

//dates that correspond to a days of the week
const dates = {
    "monday" : "2022-07-25",
    "tuesday" : "2022-07-26",
    "wednesday" : "2022-07-27",
    "thursday" : "2022-07-28",
    "friday" : "2022-07-29",
    "saturday" : "2022-07-30",
    "sunday" : "2022-07-31"
}

var NotPicoyPlacaTime = [];
var PicoyPlacaTime = [];

//Generate times for pico y placa
for (let i = 0; i < 24; i++) {
    for(let j = 0; j < 60; j++) {
        if(`${i}`.length == 1) {
            i = `0${i}`;
        }
        if(`${j}`.length == 1) {
            j = `0${j}`;
        }

        let time = `${i}:${j}`;

        //add time to the list of times that are in pico y placa
        if(isPicoyPlacaHour(time)) {
            PicoyPlacaTime.push(time);
        }

        //add time to the list of times that are not in pico y placa
        if(!isPicoyPlacaHour(time)) { 
            NotPicoyPlacaTime.push(time); 
        }
    }
}

//Generate plates that can't be on the road each day
const canNotBeOnTheRoadMondayPlates = ["AAA-1111", "AAA-1112"];
const canNotBeOnTheRoadTuesdayPlates = ["AAA-1113", "AAA-1114"];
const canNotBeOnTheRoadWednesdayPlates = ["AAA-1115", "AAA-1116"];
const canNotBeOnTheRoadThursdayPlates = ["AAA-1117", "AAA-1118"];
const canNotBeOnTheRoadFridayPlates = ["AAA-1119", "AAA-1110"];

//Generate a list of plates that teh last digit come sfrom 0 to 9
const allPlates = canNotBeOnTheRoadMondayPlates.concat(canNotBeOnTheRoadTuesdayPlates, canNotBeOnTheRoadWednesdayPlates, canNotBeOnTheRoadThursdayPlates, canNotBeOnTheRoadFridayPlates);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//--Cases tests for canBeOnTheRoad() function
//

describe('validate if any plate can be on the road at not pico y placa time', () => {

    for( const [day, date] of Object.entries(dates)) {        
        allPlates.forEach(plate => {
            test(`${day} at not pico y placa time => date:${date}, plate: ${plate}`, () => {
            NotPicoyPlacaTime.forEach(time => {             
                expect(canBeOnTheRoad(plate, date, time )).toBe(true);
            });
        });
    });
}
}
); //End Describe

describe('validate if a plate end on 1 or 2 can be on the road at pico y placa time', () => {

    for( const [day, date] of Object.entries(dates)) {
        
            canNotBeOnTheRoadMondayPlates.forEach(plate => {
                test(`${day} at pico y placa time => date:${date}, plate: ${plate}`, () => {
                    PicoyPlacaTime.forEach(time => {  
                    
                    if(`${day}` == "monday") {
                        expect(canBeOnTheRoad(plate, date, time)).toBe(false);
                    }else{
                        expect(canBeOnTheRoad(plate, date, time)).toBe(true);
                    }
                });
            });
        });
    }
});//End Describe

 describe('validate if a plate end on 3 or 4 can be on the road at pico y placa time', () => {
    
    for( const [day, date] of Object.entries(dates)) {
        
        canNotBeOnTheRoadTuesdayPlates.forEach(plate => {
            test(`${day} at pico y placa time => date:${date}, plate: ${plate}`, () => {
                PicoyPlacaTime.forEach(time => {  
                
                if(`${day}` == "tuesday") {
                    expect(canBeOnTheRoad(plate, date, time)).toBe(false);
                }else{
                    expect(canBeOnTheRoad(plate, date, time)).toBe(true);
                }
            });
        });
    });
}
 });//End Describe

describe('validate if a plate end on 5 or 6 can be on the road at pico y placa time', () => {
        
        for( const [day, date] of Object.entries(dates)) {
            
            canNotBeOnTheRoadWednesdayPlates.forEach(plate => {
                test(`${day} at pico y placa time => date:${date}, plate: ${plate}`, () => {
                    PicoyPlacaTime.forEach(time => {  
                    
                    if(`${day}` == "wednesday") {
                        expect(canBeOnTheRoad(plate, date, time)).toBe(false);
                    }else{
                        expect(canBeOnTheRoad(plate, date, time)).toBe(true);
                    }
                });
            });
        });
    }
});//End Describe

describe('validate if a plate end on 7 or 8 can be on the road at pico y placa time', () => {
            
            for( const [day, date] of Object.entries(dates)) {
                
                canNotBeOnTheRoadThursdayPlates.forEach(plate => {
                    test(`${day} at pico y placa time => date:${date}, plate: ${plate}`, () => {
                        PicoyPlacaTime.forEach(time => {  
                        
                        if(`${day}` == "thursday") {
                            expect(canBeOnTheRoad(plate, date, time)).toBe(false);
                        }else{
                            expect(canBeOnTheRoad(plate, date, time)).toBe(true);
                        }
                    });
                });
            });
        }
});//End Describe

describe('validate if a plate end on 9 or 0 can be on the road at pico y placa time', () => {
    for( const [day, date] of Object.entries(dates)) {
            
        canNotBeOnTheRoadFridayPlates.forEach(plate => {
            test(`${day} at pico y placa time => date:${date}, plate: ${plate}`, () => {
                PicoyPlacaTime.forEach(time => {  
                
                if(`${day}` == "friday") {
                    expect(canBeOnTheRoad(plate, date, time)).toBe(false);
                }else{
                    expect(canBeOnTheRoad(plate, date, time)).toBe(true);
                }
            });
        });
    });
}
}); //End Describe