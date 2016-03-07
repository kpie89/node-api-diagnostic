// This script should take a plain text file with one number per line, as in
// integers.txt. It should add all the numbers and output the result to the
// console. For example:
//
//    node lib/diagnostic.js integers.txt #=> 15
//
// If there is a line with no number, it should be ignored. However, if there is
// a line with non-number content (for example, "foo"), an error should be
// logged to the console.
//
// You can verify your script is working by running `grunt test`.
//

'use strict';

const fs = require('fs');

let inFile = process.argv[2];

function addNum(prev, curr) {
  if (NaN) {
    console.log('This is not a number');
  return prev + curr;
  }
}

let main = (file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error('Error');
    data.forEach(addNum);
    }
  });
};

main(inFile);

module.exports = main;
