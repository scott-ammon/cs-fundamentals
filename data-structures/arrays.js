// Find the second minimum in an array
const secondMin = arr => {
  let minIndex = arr.indexOf(Math.min(...arr));
  arr.splice(minIndex, 1);
  return Math.min(...arr);
}

const testArray = [45, 3, 20, 11, 7, 56];
console.log(secondMin(testArray));

// Or using this significantly shorter method:
const minimum = Math.min.apply(null, testArray);
const secondMinimum = Math.min.apply(null, testArray.filter(n => n != minimum));
console.log(secondMinimum);

// ========================================================================= //

// Find first non-repeating integer in an array
const noRepeats = arr => {
  for(let i = 0; i < arr.length; i++) {
    // Check if current element is found in remainder of the array
    if(arr.indexOf(arr[i]) === i && arr.indexOf(arr[i], i + 1) === -1) {
      return arr[i];
    }
  }
  return null;
}

const noRepeatArray = [2, 3, 7, 2, 3, 5, 7, 6, 3]
console.log(noRepeats(noRepeatArray));

// ========================================================================= //

// Merge two sorted arrays
const mergeSortedArrays = (arrOne, arrTwo) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let sortedArray = [];

  // loop through both arrays and place them in order into sortedArray
  while(i < arrOne.length && j < arrTwo.length) {
    if(arrOne[i] < arrTwo[j]) {
      sortedArray[k] = arrOne[i];
      i++;
    } else {
      sortedArray[k] = arrTwo[j];
      j++;
    }
    k++;
  }

  // if arrOne has elements left, add them to the end
  while(i < arrOne.length) {
    sortedArray[k] = arrOne[i];
    i++;
    k++;
  }

  // if arrTwo has elements left, add them to the end
  while(j < arrTwo.length) {
    sortedArray[k] = arrTwo[j];
    j++;
    k++;
  }
  return sortedArray;
}

a = [1, 3, 5, 7, 9];
b = [1, 2, 4, 6, 7, 8, 10, 12, 14];
console.log(mergeSortedArrays(a, b));

// ========================================================================= //

// Rearrange negative numbers to left side, positive numbers to the right side
numArray = [4, -5, 35, -73, 12, -14, 8];

// Using filter
const rearrange = numArray.filter(element => element < 0).concat(numArray.filter(element => element >= 0));

console.log(rearrange);