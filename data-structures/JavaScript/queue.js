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