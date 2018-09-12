arr = [1, 4, 18, 21, 57, 59, 79, 102, 132, 146]

# not recursive solution
# def binary_search(arr, val):
#   length = len(arr)
#   mid = length // 2
#   start = 0
#   end = len(arr) - 1
  
#   while(arr[mid] != val and start < end):
#     if (val < arr[mid]):
#       end = mid - 1
#     else:
#       start = mid + 1
#     mid = (start + end) // 2
  
#   return mid

# print(binary_search(arr, 3))

def binary_search(arr, val, start=0, end=None):
  if end == None:
    end = len(arr) - 1

  mid = (start + end) // 2
  
  if (start <= end):
    if (val < arr[mid]):
      return binary_search(arr, val, start, mid - 1)
    elif (val > arr[mid]):
      return binary_search(arr, val, mid + 1, end)
    else:
      return mid
  else:
    return -1

val_to_find = 146
print(f"Value {val_to_find} at index", binary_search(arr, val_to_find))