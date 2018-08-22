class Stack {
  constructor() {
    this.store = [];
  }
  // Inserts element to top of stack
  push(data) {
    this.store.push(data);
    return this.store;
  }
  // Removes top element off stack
  pop() {
    return this.store.pop();
  }
  // Returns top element, doesn't remove it
  peek() {
    return this.store.length !== 0 ? this.store[this.store.length - 1] : null;
  }
  // Checks for empty stack, returns boolean
  isEmpty() {
    return this.store.length === 0;
  }
  // Returns number of elements in stack
  size() {
    return this.store.length;
  }
  // Returns entire stack to be viewed
  printStack() {
    return this.store;
  }
}

let testStack = new Stack();
testStack.push('item one');
testStack.push('item two');
console.log(testStack.printStack());
console.log(testStack.isEmpty());
console.log(testStack.size());
console.log(testStack.peek());
console.log(testStack.pop());

