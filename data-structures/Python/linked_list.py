class Node():
  def __init__(self, data):
    self.data = data
    self.next_node = None

class LinkedList():
  def __init__(self):
    self.head = None

  def add(self, data):
    # adds a new node to the end of the list
    node = Node(data)
    if (self.head == None):
      # list is empty
      self.head = node
    else:
      current = self.head
      while(current.next_node != None):
        current = current.next_node
      current.next_node = node

  def print_list(self):
    if(self.head != None):
      current = self.head
      print(current.data)
      while(current.next_node != None):
        current = current.next_node
        print(current.data)

  def delete(self, data):
    # find node to delete based on provided data
    if (self.head == None):
      return False
    current = self.head
    if(current.data == data):
      # need to delete the head node
      temp_node = current.next_node
      current.next_node = None
      self.head = temp_node
    else:
      # need to keep looping to find the data
      while (current.next_node != None):
        previous = current
        current = current.next_node
        if (current.data == data):
          temp_node = current.next_node
          previous.next_node = temp_node
          current.next_node = None
          return True
      return False

  def insert_before(self, n, data):
    node = Node(data)
    if(n == 0):
      # insert before the head
      temp_node = self.head
      self.head = node
      self.head.next_node = temp_node
    else:
      current = self.head
      previous = None
      for i in range(0, n):
        previous = current
        current = current.next_node
        if (current == None):
          previous.next_node = node
          return True
      temp_node = previous.next_node
      previous.next_node = node
      node.next_node = temp_node

# Sample linked list 
ll = LinkedList()
ll.add(1)
ll.add(2)
ll.add(3)
ll.print_list()
ll.insert_before(2, 5)
ll.print_list()