/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  // newNode is the new item with the value of the input val pushed to the LL
  // the newNode becomes the head
  // AND the newNode also becomes the tail
  // Otherwise we know the LL contains one or more items
  // the newNode becomes the this.tail.next
  // AND it also becomes the tail
  // In all cases, the length of the LL increases by one.

  push(val) {
    
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;     
      this.tail = newNode;
    }    
    this.length += 1;
  }



  /** unshift(val): add new value to start of list. */
  // newNode is the new item with the value of the input val pushed to the LL
  // If the LL is empty, 
  // the newNode becomes the head
  // AND the head and tail are the same item.
  // Otherwise, we know that the LL contains than one item 
  // The newNode becomes the head because it is inserted at the beginning of the LL
  // In all cases the length of the LL increases by one

  unshift(val) {
    let newNode = new Node(val);
    if(this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else if(this.head = this.tail) {
      this.head = newNode
    }
    this.length += 1;
  }


  /** pop(): return & remove last item. */
  // When the last item is removed, the tail becomes the item that was to the left of the tail before it was removed, 
  // which means that the new tail becomes the item at this.length-1

  pop() {
    return this.tail = this.length -1;
  }


  /** shift(): return & remove first item. */
  // If there are one or more items in the LL, when you remove the first item, you are removing the head,
  // so this.next becomes the head.

  shift() {
    if(this.length != 0){
      return this.head.next = this.head;
    }
  }


  /** getAt(idx): get val at idx. */
  // If the LL is empty OF the idx is a negative number OR idx is greater
  // than the length of the LL
  //Throw new Error
  // Otherwise loop through LL and while i < this.length-1
  // if i = idx, return the value at that index
  // Otherwise continue the loop

  getAt(idx) {
    if(this.length === 0 || idx < 0 || idx > this.length -1) {
      throw new Error("Invalid idx.");
    } else while (i < this.length-1){
      if(i = idx){
        return this.idx.val;
      } else {
        i++;
      }
    }
  }
   

  /** setAt(idx, val): set val at idx to val */

  // If the LL is empty, or if idx is negative, or if idx is greater than this.length
  // Throw Error.
  // Else if idx = 0, set this.head to the input val
  // Otherwise loop through the LL and check to see if i matches idx. 
  // If it does, set this.idx to the input val
  // Otherwise, continue the loop.

  setAt(idx, val) {
    if(this.length === 0 || idx < 0 || idx > this.length -1) {
      throw new Error("Invalid idx.");
    } else if(idx = 0){
      this.head = val;
    } else while (i < this.length-1) {
      if(i = idx) {
        this.idx = val;
      } else i++; 
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */
  // If the LL is empty, or if idx is negative, or if idx is greater than this.length
  // Throw Error.
  // Otherwise loop through all items and check to see if i+1 === idx
  // If so, insert the value at i
  // And the length of the LL increases by one.

  insertAt(idx, val) {
    if(this.length === 0 || idx < 0 || idx > this.length -1) {
      throw new Error("Invalid idx.");
    } else while(i < this.length-1) {
      if(i + 1 === idx){
        this.i = val;
      } else i++;
      }
      this.length +1
  }

  /** removeAt(idx): return & remove item at idx, */
  // if the LL is empty, or if the idx is negative, or if the idx is 
  // larger than the length of the LL
  // throw error
  // else subtract one from the length of the LL

  removeAt(idx) {
    if(this.length === 0 || idx < 0 || idx > this.length -1) {
      throw new Error("Invalid idx.");
    } else {
      return this.length === this.length - 1;
    }
  }


  /** average(): return an average of all values in the list */
  // define variable 'sum' as zero.
  // if the LL is empty, return zero
  // else, loop through the LL, and while i is less than the length 
  // of the LL -1, sum up the values at i
  // then define the variable "average" as sum divided by the length of the LL
  // return this.average
  
  average() {
    let sum = 0;
    if(this.length === 0){
      return 0;
    } else {
      while(i < this.length-1) {
      sum += this.i.val;
    }
    average = sum / this.length;
    return this.average;
  }
}

module.exports = LinkedList;
