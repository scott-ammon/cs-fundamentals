class Queue:
  def __init__(self):
    self.store = []

  def enqueue(self, element):
    self.store.append(element)
    return self

  def dequeue(self):
    # pop(0) removes the first element
    return self.store.pop(0)

  def is_empty(self):
    return true if len(self.store) == 0 else false

  def size(self):
    return len(self.store)

  def top(self):
    return self.store[0]

test = Queue()
test.enqueue("First")
test.enqueue("Second")
test.enqueue("Third")
test.dequeue()
test.dequeue()
test.enqueue("Stuff")
test.enqueue("Things")

print(test.store)
print(test.size())
print(test.top())