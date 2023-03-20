/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  // line 30: Define node as new Node from above Node class
  // line 31: If there is no value in the first position of the queue (the queue is empty)
  // line 32: Then let the node be in the first position of the queue
  // line 33: Since the node is now the only value in the queue, node is also at the last position
  // line 34: Else if the queue was not empty to begin with, then add node to the end of the queue by defining it as this.last.next
  // line 35: Now that node has been added to the end, define it as this.last
  // line 36: The size of the queue increases by one since we added one node to the end

  enqueue(val) {
    let node = new Node(val);
    if(!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node
      this.last = node;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  // line 53: If there is no value at the first position of the queue (meaning the queue is empty)
  // line 54: Throw the error, "No items in queue."
  // line 56: Define removedVal as this.first, since we are removing the value at the beginning of the queue
  // line 57: If the first and the last values in the queue are equal (meaning there was only one value in the queue)...
  // line 58: ...define this.last as null, since we removed the only value from the queue
  // line 60: Otherwise by removing the first value in the queue, this.first.next becomes this.first
  // line 61: Since we removed a value from the queue, decrease the size of the queue by 1
  // line 62: Return removedVal.val.

  dequeue() {
    if(!this.first){
      throw new Error("No items in queue.");
    }
    let removedVal = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removedVal.val;
  }

  /** peek(): return the value of the first node in the queue. */
 // line 69: Since we are only looking to see what value is in the first position of the queue, return this.first.val

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  // line 77: In order for the queue to be empty, the size must be equal to 0, so if this.size === 0...
  // line 78: ...return true.

  isEmpty() {
   return this.size === 0
  }
}

module.exports = Queue;
