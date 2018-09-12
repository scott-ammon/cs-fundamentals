test_array = [24, 2, 16, 103, 45, 22, 133, 7, 9]

def bubble_sort(arr):
  for i in range(len(arr)):
    for j in range(0, len(arr) - i - 1):
      print(arr[j])
      if arr[j] > arr[j + 1]:
        arr[j + 1], arr[j] = arr[j], arr[j + 1]
  return arr

print("Unsorted:", test_array)
print("Sorted:", bubble_sort(test_array));


