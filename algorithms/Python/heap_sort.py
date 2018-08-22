def make_heap(arr, n, i):
  largest = i
  l = 2 * i + 1
  r = 2 * i + 1

  if l < n and arr[i] < arr[l]:
    largest = l
  if r < n and arr[largest] < arr[r]:
    largest = r
  if largest != i:
    arr[i], arr[largest] = arr[largest], arr[i]
    make_heap(arr, n, largest)
  return arr

def heap_sort(arr):
  n = len(arr)
  for i in range(n, -1, -1):
    make_heap(arr, n, i)
  for i in range(n-1, 0, -1):
    arr[0], arr[i] = arr[i], arr[0]
    make_heap(arr, i, 0)
  return arr

testArray = [13, 103, 130, 57, 2, 11, 19, 280]

print(heap_sort(testArray))