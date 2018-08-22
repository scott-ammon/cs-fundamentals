class Stack:
  def __init__(self):
    self.store = []
  
  def push(self, element):
    self.store.append(element)
    return self

  def pop(self):
    return self.store.pop()

  def is_empty(self):
    return self.size() == 0
  
  def size(self):
    return len(self.store)

  def peek(self):
    return self.store[len(self.store) - 1]

  def print_stack(self):
    return self.store

test = Stack()
test.push('item one')
print(test.size())
test.push('item two')
print(test.size())
print(test.print_stack())
print(test.peek())
print(test.pop())
print(test.pop())

# Bracket matching with stack

# Determine if character is a bracket
def is_bracket(char):
  is_bracket = False
  brackets = ['(',')','{','}','[',']']
  for bracket in brackets:
    if (char == bracket):
      is_bracket = True
  return is_bracket

# Determine if character is open bracket
def is_open_bracket(char):
  is_open_bracket = False
  open_brackets = ['(','{','[']
  for bracket in open_brackets:
    if (char == bracket):
      is_open_bracket = True
  return is_open_bracket

# Determine if a matching open/close pair of parens
def is_a_pair(open_bracket, close_bracket):
  brackets = ['()','{}','[]']
  match = False
  for char in brackets:
    if(open_bracket == char[0]):
      if(close_bracket == char[1]):
        match = True
  return match

# Main function that calls paren functions and stack
def bracket_match(input_string):
  chars = list(input_string)
  char_stack = Stack()

  for char in chars:
    if (is_bracket(char)):
      if (is_open_bracket(char)):
        char_stack.push(char)
      else:
        if (char_stack.size() == 0):
          return False
        else:
          open_bracket = char_stack.pop()
          # compare test_paren to the top of the stack
          if(not is_a_pair(open_bracket, char)):
            return False
  
  return False if(char_stack.size() > 0) else True
    
print(bracket_match('[stuff]{morestuff}(blah()}'))