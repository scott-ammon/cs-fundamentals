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
  console.log("buckets:", buckets);
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
  console.log("count: ", count)
  return arr;
}

testArray = [0.897, 0.565, 0.656, 0.124, 0.665, 0.343, 0.931, 0.271]

console.log("Unsorted:", testArray)
console.log("Sorted:", bucketSort(testArray))