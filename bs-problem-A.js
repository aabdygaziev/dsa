"use strict"
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
      return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
  let a = readLine();
  let inputs = readLine();
  let queries = readLine();

  inputs = inputs.split(' ').map(num => parseInt(num));
  queries = queries.split(' ').map(num => parseInt(num));
  
  findNum(inputs, queries);
}

function findNum(arr, queries) {
  
  for (let i = 0; i < queries.length; i++) {

    let left = 0;
    let right = arr.length;
    let bool = false;

    let num = queries[i];

    while(left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) {
        bool = true;
        break;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (bool) {
      console.log('YES');
    } else {
      console.log("NO");
    }
  }
  return 0;
}