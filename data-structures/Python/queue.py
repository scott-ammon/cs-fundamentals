class Queue:
  def __init__(self):
    self.store = []

  def enqueue(self, element):
    self.store.append(element)
    return self

  def dequeue(self):
    return self.store.pop(0)

  def size(self):
    return len(self.store)

test = Queue()
test.enqueue("First")
test.enqueue("Second")
test.enqueue("Third")
test.dequeue()
test.dequeue()
print(test.store)