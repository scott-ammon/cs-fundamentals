def quick_sort(arr):
  if len(arr) <= 1:
    return arr

  pivot = arr[0]
  mid = []
  left = []
  right = []

  for item in arr:
    if(item > pivot):
      right.append(item)
    elif (item < pivot):
      left.append(item)
    elif (item == pivot):
      mid.append(item)

  return quick_sort(left) + mid + quick_sort(right)
  
print(quick_sort([5, 10, -4, 321, 10, 23, 3]))