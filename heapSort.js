var makeHeap = function(arr, n, i) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && arr[i] < arr[l]) {
    largest = l;
  }
  if (r < n && arr[largest] < arr[r]) {
    largest = r;
  }
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    makeHeap(arr, n, largest)
  }
  return arr;
}

var heapSort = function(arr) {
  n = arr.length;
  for(let i = n/2 - 1; i >=0; i--) {
    console.log('hello');
    makeHeap(arr, n, i);
  }
  for(let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    makeHeap(arr, i, 0);
  }
  return arr;
}

var testArray = [13, 103, 130, 57, 2, 11, 19, 280];

console.log(heapSort(testArray));