// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    let returned = [];
    returned.push(array[0]);
    returned.push(array[1]);
    return returned;
}

const returnLastTwoDrivers = function(array) {
    let returned = [];
    returned.push(array[array.length-2]);
    returned.push(array[array.length-1]);
    return returned;
}


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(nu) {
    return function(fare) { return fare * nu; };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, funct) {
    return funct(array);
}