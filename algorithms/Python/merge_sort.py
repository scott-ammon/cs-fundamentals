def merge(left, right):
  smallest = 0
  # base cases
  if len(right) == 0:
    return left
  if len(left) == 0:
    return right
  # Find smallest number and remove it
  if left[0] <= right[0]:
    smallest = left.pop(0)
  else:
    smallest = right.pop(0)
  # keep merging until either array is empty
  merged = merge(left, right)
  merged.insert(0, smallest)
  return merged

def merge_sort(arr):
  # base case
  if(len(arr) == 1):
    return arr
  else:
    mid = len(arr) // 2
    l = arr[:mid]
    r = arr[mid:]
    return merge(merge_sort(l), merge_sort(r))

data = [5, 10, 3, 90, 95, 654, 34, 9112, -6, 80]
print(merge_sort(data))