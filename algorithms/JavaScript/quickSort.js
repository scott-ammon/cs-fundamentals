var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[0];
  var mid = [];
  var left = [];
  var right = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > pivot) {
      right.push(arr[i]);
    } else if(arr[i] < pivot) {
      left.push(arr[i]);
    } else if(arr[i] === pivot) {
      mid.push(arr[i])
    }
  }
  
  return quickSort(left).concat(mid, quickSort(right));
}

console.log(quickSort([5, 10, -4, 321, 10, 23, 3]));