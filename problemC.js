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
  let inputs = inputString[1].split(' ').map(num => parseInt(num));
  let queries = inputString[2].split(' ').map(num => parseInt(num));
  findNum(inputs, queries);
}


function findNum(arr, queries) {
  
  for (let i = 0; i < queries.length; i++) {

    let left = -1; // arr[left] < target num
    let right = arr.length; // arr[right] >= target num
    let num = queries[i];
    while ((left + 1) < right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] < num) { 
        left = mid;
      } else {
        right = mid;
      }
    }
    console.log(right + 1);
  }
    
  return 0;
}