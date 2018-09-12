let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findThis = 8;

let binarySearch = function(n, arr) {
  let min = 0
  let max = arr.length - 1;
  let guess = Math.floor((max + min) / 2);

  if(arr.length === 0) {
    return -1;
  }
  
  while(arr[guess] !== n && min < max) {
    if(arr[guess] > n) {
      max = guess - 1
    } else {
      min = guess + 1
    }
    guess = Math.floor((max + min) / 2);
  }
  return (arr[guess] === n) ? guess : -1;
}

// Print results
let answer = binarySearch(findThis, myArray);
console.log("Index:", answer);