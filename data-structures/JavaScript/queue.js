class Queue {
  constructor() {
    this.store = [];
  }

  // add an item to the end of the queue
  enqueue(data) {
    this.store.push(data);
    return this.store;
  }

  // remove an item from front of queue
  dequeue() {
    return this.store.shift();
  }

  // returns true if no items in queue
  isEmpty() {
    return this.store.length === 0 ? true : false;
  }

  // returns the number of items in the queue
  size() {
    return this.store.length;
  }

  // returns first element in the queue
  top() {
    return this.store[0];
  }
}

let test = new Queue;
test.enqueue(7);
test.enqueue(3);
test.enqueue(11);
console.log(test.store);
test.dequeue();
console.log(test.store);
console.log(test.size());
console.log(test.top());

// Implement a stack using only a queue
class StackUsingQueue {
  // use two queues to implement the stack
  constructor() {
    this.q1 = new Queue;
    this.q2 = new Queue;
  }

  // add element to top of stack, same as normal stack operation
  push(data) {
    this.q1.enqueue(data);
    return this.q1;
  }
  
  // remove element from top of stack
  pop() {
    // move all q1 items (except the last) to q2
    while(this.q1.size() > 1) {
      this.q2.enqueue(this.q1.dequeue());
    }
    // remove last item and save it
    let temp = this.q1.dequeue()
    // move items back to q1
    let q = new Queue;
    this.q1 = this.q2;
    this.q2 = q;

    // return the popped item
    return temp;
  }

}

let newTest = new StackUsingQueue;
newTest.push(1);
newTest.push(2);
newTest.push(3);
console.log(newTest.pop());
console.log(newTest.q1);
newTest.push(4);
console.log(newTest.q1);