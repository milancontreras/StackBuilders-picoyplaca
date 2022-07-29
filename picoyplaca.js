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
