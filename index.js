'use strict';
const fs = require('fs');
const createInterface = require('readline').createInterface;
const createReadStream = fs.createReadStream;

// INPUT FILES
const files = [
  'URLS AKAMAI IBERIA-PLUS',
  'URLS AKAMAI AVIOS-CALCULATOR'
];

// INPUT READER
var file = files[1];
const inputReader = createInterface({
  input: createReadStream(`input/${file}.txt`)
});

var lineNumber = 0;
// LINE READER
inputReader.on('line', (line) => {
  readCurrentLine(line);
  lineNumber++
});

// FILE ENDS
inputReader.on('close', () => {
  createFile(newUrls)
})

var newUrls = [];

// READ  LINES
function readCurrentLine(currentUrl) {
  if (currentUrl && currentUrl !== 'https://www.iberia.com/iberia-web-content/') {
    newUrls.push(currentUrl + 'web-avios-calculator.min.css');
    newUrls.push(currentUrl + 'web-avios-calculator.dependencies.min.css');
    newUrls.push(currentUrl + 'web-avios-calculator.templates.js');
    newUrls.push(currentUrl + 'web-avios-calculator.min.js');
    newUrls.push(currentUrl + 'web-avios-calculator.dependencies.min.js');
  }
};



// GIVEN SOLUTION DATA, GENERATE OUTPUT FILE TO SUBMIT
function createFile(newUrls) {
  newUrls.push('https://www.iberia.com/iberia-web-content/');
  var filename = './output/' + file + '.txt';
  var textData = newUrls.toString().split(/[,]+/).join('\r\n');
  fs.writeFile(filename, textData, function (error) {
    if (error) {
      return console.log(error);
    } else {
      console.log('File ' + filename + ' was saved succesfully');
    }

  });
}