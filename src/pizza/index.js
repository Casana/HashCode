'use strict';
const fs = require('fs');
const createInterface = require('readline').createInterface;
const createReadStream = fs.createReadStream;
// const EOL = require('os').EOL;

const files = [
  'a_example',
  'b_small',
  'c_medium',
  'd_big',
];

const file = files[process.argv.length = 3 ? parseInt(process.argv[3]) : 0];

const inputReader = createInterface({
  input: createReadStream(`input/${file}.in`)
});

let lineNumber = 0;
let steps;
inputReader.on('line', (line) => {
  if (lineNumber === 0) readProblemConditions(line);
  else readCurrentRide(line);
  lineNumber++
});

inputReader.on('close', () => {
  steps = 0;
})

let city;
let vehiclesNumber;
let ridesNumber;
let bonus;
let stepsNumber;
let vehicles = [];

const readProblemConditions = (problemConditions) => {
  const condiciones = problemConditions.split(' ');
  city = new City(condiciones[0], condiciones[1])
  vehiclesNumber = condiciones[2];
  ridesNumber = condiciones[3];
  bonus = condiciones[4];
  steps = new Array(condiciones[5]);

  for (let i = 0; i < vehiclesNumber; i++) {
    city.vehicles.push(new Vehicle(i));
  }
  for (let i = 0; i < steps.length; i++) {
    steps.push(new Step(city.vehicles, i));
  }
};

const readCurrentRide = (rideConditions) => {
  const cond = rideConditions.split(' ');
  const currentRide = new Ride(cond[0], cond[1], cond[2], cond[3], cond[4], cond[5])
  const availableVehicles = getAvailablesVehicles();
  let minDistance = Infinity, currentRideDistance, closestVehicle;
  for (let i = 0; i < availableVehicles.length; i++) {
    currentRideDistance = getDistance(availableVehicles[i].xposition, availableVehicles[i].yposition, currentRide.startIntersection.ejeX, currentRide.startIntersection.ejeY)
    minDistance = Math.min(minDistance, currentRideDistance);
    if (minDistance === currentRideDistance) closestVehicle = availableVehicles[i];
  };
  const getAvailablesVehicles = (initRideStep, endRideStep) => {
    for()
    steps[]
    city.vehicles.filter(vehicle => !vehicle.busy);
  }
};

class City {
  constructor(rows, columns) {
    this.x = rows;
    this.y = columns;
    this.vehicles = [];
  }
}

class Step {
  constructor(vehicles, index) {
    this.vehicles = vehicles;
    this.stepIndex = index
  }
}

class Vehicle {
  constructor(n) {
    this.xposition = 0;
    this.yposition = 0;
    this.busy = false;
    this.carNumber = n;
  }
}

class Ride {
  constructor(xs, ys, xf, yf, early, finish) {
    this.startIntersection = {
      ejeX: xs,
      ejeY: ys
    };
    this.finishIntersection = {
      ejeX: xf,
      ejeY: yf
    }
    this.earlyStart = early;
    this.latestFinish = finish;
    this.rideDistance = getDistance(xs, ys, xf, yf);
  }
}

const getDistance = (x0, y0, x, y) => {
  return x + y - x0 - y0
}
