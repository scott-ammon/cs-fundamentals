# loop from i to length-1
# key is the item we want to move
# while key is less than item to the left, swap them, increment down
# 

def insertion_sort(arr):
  for i in range(1, len(arr)):
    key = arr[i]
    j = i - 1
    while(j >= 0 and key < arr[j]):
      arr[j + 1] = arr[j]
      j = j - 1
    arr[j + 1] = key
  return arr

test_array = [12, 5, 34, 2, 17, 9, 1]

print(insertion_sort(test_array))
    
