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
//

function main() {
  let n = inputString[1].split(' ').map(num => parseInt(num));
  let k = parseInt(inputString[2]);
  let q = inputString.slice(3).map(nums => nums.split(' ').map(num => parseInt(num)));
  n.sort((a, b) => a - b);

  for (let i = 0; i < k; i++) {
    console.log(lowerBound(n, q[i][1]) - upperBound(n, q[i][0]) + 1);
  }
}

function lowerBound(arr, num) {
  let l = -1;
  let r = arr.length;
  while (l + 1 < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] > num) {
      r = mid;
    } else {
      l = mid;
    }
  }
  return l;
}

function upperBound(arr, num) {
  let l = -1;
  let r = arr.length;
  while (l + 1 < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] < num) {
      l = mid;
    } else {
      r = mid;
    }
  }
  return r;
}
