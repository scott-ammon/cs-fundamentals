var insertionSort = function(arr) {
  for(let i = 1; i < arr.length; i++) {
    // store element we are trying to sort as 'key'
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

function bucketSort(arr, bucketCount=6) {
  let min = Math.min(...arr);
  let buckets = [];
  count = 0;
  
  // build the buckets and distribute array elements into them
  arr.forEach(function(num) {
    var newIndex = Math.floor(bucketCount * num)
    buckets[newIndex] = buckets[newIndex] || [];
    buckets[newIndex].push(num);
    count++;
  });
  // put the elements back into the array
  var idx = 0;
  for (let i = 0; i < buckets.length; i++) {
    if(typeof buckets[i] != 'undefined') {
      // Sort the non empty buckets
      insertionSort(buckets[i]);
      for(let j = 0; j < buckets[i].length; j++) {
        // using 'post increment' (there is also a pre-increment like ++idx)
        arr[idx++] = buckets[i][j];
        count++;
      }
    }
  }
  return arr;
}

testArray = [0.897, 0.565, 0.656, 0.124, 0.665, 0.343, 0.931, 0.271]

console.log("Unsorted:", testArray)
console.log("Sorted:", bucketSort(testArray))