// Code your solution in this file!

function distanceFromHqInBlocks(pickUp) {
    let disOfBlock; 
    const location = 42;
    if (pickUp > location) {
    disOfBlock = pickUp - location; 
    return disOfBlock; 
    } else if (pickUp < location) {
        disOfBlock = location - pickUp;
        return disOfBlock;
    }
}
function distanceFromHqInFeet(pickUp) {
    let feetOfBlock = distanceFromHqInBlocks(pickUp) * 264; 
    return feetOfBlock;
}
function distanceTravelledInFeet(start, destination) {
    let disTraInFeet;
     if  (destination > start) {
        disTraInFeet = (destination - start) * 264;
        return disTraInFeet;
     } else if (destination < start) {
        disTraInFeet = (start - destination) * 264; 
        return disTraInFeet;
     }
}
function calculatesFarePrice(start, destination) {
    let farePrice;
    if (distanceTravelledInFeet(start, destination) <= 400 ) {
        farePrice =  distanceTravelledInFeet(start, destination) * 0;
        return farePrice;
       /* if (distanceTravelledInFeet(start, destination) >2000) {
            farePrice = (distanceTravelledInFeet(start, destination) - 400) * 2;
            return farePrice;
        }*/
    } else if (distanceTravelledInFeet(start, destination) < 2000) {
        //if (distanceTravelledInFeet(start, destination) <= 400 ) {//
        farePrice = (distanceTravelledInFeet(start, destination) - 400) * 0.02;
        return farePrice;
        
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <2500 ) {
        farePrice = 25;
        return farePrice; 
        
    } else  if (distanceTravelledInFeet(start, destination) > 2500) {
        return farePrice = 'cannot travel that far';
    }
}