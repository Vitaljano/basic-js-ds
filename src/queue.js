const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  add(element) {
    let node = new ListNode(element);

    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}
class Queue {
  queue = [];

  getUnderlyingList() {
    let list = new LinkedList();

    for (let value of this.queue) {
      list.add(value);
    }
    return list.head;
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }
}

// const queue = new Queue();
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(5);
// console.log(queue.getUnderlyingList());

// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue());
// console.log(queue);
// console.log(queue);
module.exports = {
  Queue,
};
