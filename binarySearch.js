// codeforces
// find num x in an array, if x is in arr print YES; if X is not in arr print NO

function find(arr, x) {
  let l = 0;
  let r = arr.length;

  while(l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === x) return true;
    if (arr[m] < x) l = m + 1;
    if (arr[m] > x) r = m - 1;
  }

  return false;
}

function bSearch(n, k) {
  for (let i = 0; i < k.length; i++) {

    if (find(n, k[i])) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }

  return 0;
}

// another way of solving this

function findNum(arr, nums) {

  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];

    let l = -1;
    let r = arr.length;

    while(r > l + 1) {
      let m = Math.floor((r + l) / 2);

      if (arr[m] < x) {
        l = m;
      } else {
        r = m;
      }
    }

    if (r < arr.length && arr[r] === x) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }

  return 0;
}

let n = [1, 61, 126, 217, 2876, 6127, 39162, 98126, 712687, 1000000000];
let k = [100, 6127, 1, 61, 200, -10000 , 1, 217, 10000, 1000000000];
findNum(n,k);
// bSearch(n,k);

// codeforces
// find element closest to the left to num x in arr

function findClosestLeft(arr, nums) {
  
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];

    let l = -1;
    let r = arr.length;

    while (l + 1 < r) {
      let m = Math.floor((r + l) / 2);
      if (arr[m] <= x) {
        l = m;
      } else {
        r = m;
      }
    }
    console.log(l + 1);
  }

  return 0;
}


let arr1 = [3,3,5,8,9];
let nums1 = [2,4,8,1,10];

// codeforces find closest to right
function findClosestRight(arr, nums) {
  
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];

    let l = -1;
    let r = arr.length;

    while (l + 1 < r) {
      let m = Math.floor((r + l) / 2);
      if (arr[m] < x) {
        l = m;
      } else {
        r = m;
      }
    }
    console.log(r + 1);
  }

  return 0;
}

//findClosestRight(arr1, nums1);