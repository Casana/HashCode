'use strict';
const fs = require('fs');
const createInterface = require('readline').createInterface;
const createReadStream = fs.createReadStream;
// const EOL = require('os').EOL;

const files = [
  ''
];

const file = files[process.argv.length > 1 ? parseInt(process.argv[process.argv.length]) : 0];

const inputReader = createInterface({
  input: createReadStream(`input/${file}.in`)
});

let lineNumber = 0;
inputReader.on('line', (line) => {
  if (lineNumber === 0) readProblemConditions(line);
  else readCurrentLide(line);
  lineNumber++
});

inputReader.on('close', () => {
  
})

let object = new Objeto;


const readProblemConditions = (problemConditions) => {
  
};

const readCurrentLide = (lineConditions) => {

};

class Objeto {
  constructor(rows, columns) {
    this.x = rows;
    this.y = columns;
    this.vehicles = [];
  }
}
