/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  // line 31: Define node as new Node from above Node class
  // line 32: If there is no value in the first position of the stack (the stack is empty)
  // line 33: Then let the node be in the first position of the stack
  // line 34: Since the node is now the only value in the stack, node is also at the last position
  // line 36: Else if the stack was not empty to begin with, then add node to the top of the stack by defining prevTop as this.first
  // line 37: To add node to the top of the stack, define this.first = node
  // line 38: So then prevTop is now this.first.next
  // line 40: Since we added node to the stack, the size of the stack increases by 1.

  push(val) {
    let node = new Node(val);
    if (!this.first){
      this.first = node;
      this.last = node;
    } else {
      let prevTop = this.first;
      this.first = node;
      this.first.next = prevTop;
    }
    this.size ++
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  // line 55: If there is no value in the first position of the stack (the stack is empty)
  // line 56: Throw error, "No items in stack."
  // line 58: Otherwise define top as this.first
  // line 59: If this.first is equal to this.last (meaning there is only one item in the stack)
  // line 60: Then this.last will become null once that one item is removed from the stack
  // line 62: Otherwise, upon removing this top item, this.first.next becomes this.first
  // line 63: Since an item was removed from the stack, the size of the stack decreases by 1.
  // line 64: Return the value that was removed, which is top.val

  pop() {
    if(!this.first) {
      throw new Error ("No items in stack.");
    }
    let top = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return top.val;
  }

  /** peek(): return the value of the first node in the stack. */
  // line 71: Since we are only looking to see what value is in the first position of the stack, return this.first.val

  peek() {
    return this.first.val;

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  // line 80: In order for the stack to be empty, the size must be equal to 0, so if this.size === 0...
  // line 81: ...return true.



  isEmpty() {
    return this.size === 0
  }
}

module.exports = Stack;
