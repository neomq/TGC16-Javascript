// assume that we are creating a function that ccalculates the dist given speed and height

function calculateDistance(speed,time) {
    let distance = speed * time;
    return distance;
}

function calculateFuelRequired(distance) {
    // assume 1km costs 0.5 litre of fuel
    return distance * 0.5;
}

console.log(calculateDistance(10,20));
console.log("distance travelled =", distance);
console.log("Fuel needed = ", calculateFuelRequired(distance));