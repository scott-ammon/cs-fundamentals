const merge = function (left, right) {
  let smallest = 0;
  // base cases
  if(right.length === 0) {
    return left;
  }
  if(left.length === 0) {
    return right;''
  }

  // Find smallest number and remove it
  if(left[0] <= right[0]) {
    smallest = left.shift();
  } else {
    smallest = right.shift();
  }

  // Keep merging unil eiher array is empty
  let merged = merge(left, right);
  merged.unshift(smallest);
  return merged;
}

const mergeSort = function(arr) {
  // Base case
  if(arr.length === 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let l = arr.slice(0, mid);
    let r = arr.slice(mid);
    return merge(mergeSort(l), mergeSort(r));
  }
}

data = [5, 10, 3, 90, 95, 654, 34, 9112, -6, 80];
console.log(mergeSort(data));