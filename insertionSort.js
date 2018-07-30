testArray = [24, 2, 16, 103, 45, 22, 133, 7, 9]

var insertionSort = function(arr) {
  for(let i = 1; i < arr.length; i++) {
    // element we are trying to sort
    key = arr[i];
    // initialize j to the left of the key
    j = i - 1
    // swap the key left until it's sorted
    while(key < arr[j] && j >= 0) {
      arr[j+1] = arr[j];
      j-= 1;
    }
    // set new key to the first unsorted element
    arr[j+1] = key
  }
  return arr;
}

console.log("Unsorted:", testArray)
console.log("Sorted:", insertionSort(testArray))