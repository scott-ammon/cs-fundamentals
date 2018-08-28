class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let node = new Node(data);
    // if list empty, point head at this new node
    if(!this.head) {
      this.head = node;
    } else {
      // traverse list and point last at this new node
      let current = this.head;
      while(current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
  }

  delete(data) {
    if(!this.head) {
      return false;
    }
    let current = this.head;
    if(current.data === data) {
      let tempNode = current.nextNode;
      current.nextNode = null;
      this.head = tempNode;
    } else {
      while(current.nextNode) {
        let previous = current;
        current = current.nextNode;
        if(current.data === data) {
          let tempNode = current.nextNode;
          previous.nextNode = tempNode;
          current.nextNode = null;
          return true;
        }
      }
      return false;
    }
  }

  insertBefore(n, data) {
    let node = new Node(data);
    if(n === 0) {
      let tempNode = this.head;
      this.head = node;
      this.head.nextNode = tempNode;
    } else {
      let current = this.head;
      let previous = null;
      for(let i = 0; i < n; i++) {
        previous = current;
        current = current.nextNode;
        if(current === null) {
          previous.nextNode = node;
          return true;
        }
      }
      let tempNode = previous.nextNode;
      previous.nextNode = node;
      node.nextNode = tempNode;
    }

  }

  printList() {
    if(this.head) {
      let current = this.head;
      console.log(current.data);
      while(current.nextNode) {
        current = current.nextNode;
        console.log(current.data);
      }
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(14);
list.add(5);
list.add(7);
list.printList();
list.delete(14);
list.printList();
list.insertBefore(2, 23);
list.printList();
