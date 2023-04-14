class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  // line 36: If there is no root value ... 
  // line 37: ... insert the new value at this.root.
  // line 38: Return this
  // line 40: Otherwise, define variable current as this.root 
  //         (we'll start here to look for the right place to insert the new value).
  // line 41: Use while loop to iterate through the tree
  // line 42: If the value to be inserted is less than the current.val (root if it's the first iteration) ...
  // line 43: ...and if there is no child node on the left...
  // line 44: ...put the new value at the left child node
  // line 45: Return this
  // line 46: If there is a child node on the left ... 
  // line 47: ... re-define current as the child node on the left
  // line 49: Else if the value to be inserted is larger than the current.val (root if it's the first iteration)...
  // line 50: ... and if there is no child node on the right ...
  // line 51: ... put the new value at the right child node
  // line 52: Return this
  // line 55: If there is a child node on the right ...
  // line 54: ... re-define current as the child node on the right

  insert(val) {
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }
    let current = this.root;
    while(true) {
      if(val < current.val) {
        if(current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if(val > current.val) {
        if(current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
        current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  // line 80: If there is no root value
  // line 81: Insert new value at this.root.
  // line 82: Return this.
  // line 84: 
  // line 85: If val is less than the new current.val...
  // line 86: ... and if there is no child node on the left...
  // line 87: ...put the new value at the child node on the left
  // line 88: return this.
  // line 90: If there is a child node on the left, then call insertRecursively(val, current.left) function on the 
  //        child node on the left to see if the new value goes there
  // line 91: Otherwise, if val is greater than current.val...
  // line 92: ...and there is no child node on the right...
  // line 93: ...put the new value at the child node on the right
  // line 94: Return this
  // line 96: if there is a child node on the right, then call insertRecursvely(val, current.right) function on the
  //        child node on the left to see if the new value goes there.

  insertRecursively(val, current = this.root) {
    if(this.root === null) {
      this.root = new Node(val);
      return this;
    }
    
    if(val < current.val){
      if(current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  // line 118: Define variable currentNode as this.root (since we're starting our search at the root)
  // line 119: Define boolean variable found as false
  // line 120: If the val we are looking for is equal to currentNode.val (root.val, at this point), 
  //        then return currentNode because we found it. If not, skip down to line 131
  // line 121: Otherwise, while there is a currentNode and we haven't found our value yet...
  // line 122: ...if val is less than currentNode.val...
  // line 123: ...re-define currentNode as the child node on the left
  // line 124: Otherwise, if val is greater than currentNode.val...
  // line 125: ...re-define currentNode as the child node on the right
  // line 126: else (we know now that currentNode.val must be equal to val)...
  // line 127: re-define found to equal true, then skip down four lines and return currentNode
  // line 130: (now we are dealing with the conditional statement just before the while loop, so 
  //        if val is not equal to currentNode.val (which is actuall this.root), then we have reached a leaf node so we
  //        then return undefined because val is not present in the tree.
  // line 131: Here we are returning currentNode as instructed in line 120.
  find(val) {
    let currentNode = this.root;
    let found = false;
    if(val === currentNode.val) return currentNode;
    while(currentNode && !found){
      if(val < currentNode.val) {
        currentNode = currentNode.left;
      } else if(val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return currentNode;
  }
  /** findRecursively(val): search the tree for a node with value val.
  * return the node, if found; else undefined. Uses recursion. */
  // line  150: Define variable currentNode as this.root (because we are starting our search at the top of the tree)
  // line 151: If the currentNode has no value, then it is a leaf node, so return undefined because the value is not in the tree
  // line 152: If val is less than currentNode.val (meaning, we're serching on the left side of the tree)...
  // line 153: ...and if there is no child node on the left...
  // line 154: ...return undefined because we have reached the end of the path and haven't found our val
  // line 157: If there is a child node on the left...
  // line 156: ...then call findRecursively(val, currentNode.left) on the left child node.  If we find our val this time, then skip down to line 165 ...
  // line 158: Otherwise, if val is greater than currentNode.val (meaning we're searching on the right side of the tree)... 
  // line 159: ...and there is no child node on the right... 
  // line 160: ...return undefined because we have reached the end of the path and haven't found our val
  // line 161: If there is a child node on the right ...
  // line 162: ...then call findRecursively(val, currentNode.right) on the right child node.  If we find our val this time, then...
  // line 165: ...return currentNode, because we've found our val!

  findRecursively(val, currentNode = this.root) {
   
    if(currentNode === null) return undefined
    if(val < currentNode.val){
      if(currentNode.left === null) {
        return undefined;
      } else {
        return this.findRecursively(val, currentNode.left);
      }
    } else if (val > currentNode.val) {
      if (currentNode.right === null) {
        return undefined;
      } else {
        return this.findRecursively(val, currentNode.right);
      }
    }
    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
  // line 179: Define variable visitedNodeValues as an empty array because it is where we will store the nodes we visit while traversing
  // line 180: Define currentNode as this.root because this is where the traversal will start
  // line 181: Define function traverseHelper(node) as the function that will be pushing the nodes we've visited into the visitedNodes array.
  // line 182: Push the node passed into the function into the visitedNodeValues array (because we've just visited)
  // line 183: If there is a child node on the left, call traverseHelper(node) on node.left recursively
  // line 184: If there is a child node on the right, call traverseHelper(node) on node.right recursively
  // line 186: Call traverseHelper(node on the currentNode)
  // line 187: Once the whole tree has been traversed, return the visitedNodeValues array. 
  dfsPreOrder() {
    let visitedNodeValues = [];
    let currentNode = this.root;
    const traverseHelper = (node) => {
      visitedNodeValues.push(node.val);
      if(node.left) traverseHelper(node.left);
      if(node.right) traverseHelper(node.right);
    }
    traverseHelper(currentNode);
    return visitedNodeValues;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */
  // line 201: Define variable visitedNodeValues as an empty array because it is where we will store the nodes we visit while traversing
  // line 202: Define currentNode as this.root because this is where the traversal will start
  // line 203: Define function traverseHelper(node) as the function that will be pushing the nodes we've visited into the visitedNodes array.
  // line 204: If there is a child node on the left, call traverseHelper(node) on node.left recursively
  // line 205: Push the node passed into the function into the visitedNodeValues array (because we've just visited) 
  // line 206: If there is a child node on the right, call traverseHelper(node) on node.right recursively
  // line 208: Call traverseHelper(node on the currentNode)
  // line 209: Once the whole tree has been traversed, return the visitedNodeValues array. 
  dfsInOrder() {
    let visitedNodeValues = [];
    let currentNode = this.root;
    const traverseHelper = (node) => {
      if(node.left) traverseHelper(node.left);
      visitedNodeValues.push(node.val);
      if(node.right) traverseHelper(node.right);
    }
    traverseHelper(currentNode);
    return visitedNodeValues;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */
  // line 223: Define variable visitedNodeValues as an empty array because it is where we will store the nodes we visit while traversing
  // line 224: Define currentNode as this.root because this is where the traversal will start
  // line 225: Define function traverseHelper(node) as the function that will be pushing the nodes we've visited into the visitedNodes array.
  // line 226: If there is a child node on the left, call traverseHelper(node) on node.left recursively
  // line 227: If there is a child node on the right, call traverseHelper(node) on node.right recursively
  // line 228: Push the node passed into the function into the visitedNodeValues array (because we've just visited) 
  // line 230: Call traverseHelper(node on the currentNode)
  // line 231: Once the whole tree has been traversed, return the visitedNodeValues array. 
  dfsPostOrder() {
    let visitedNodeValues = [];
    let currentNode = this.root;
    const traverseHelper = (node) => {
      if(node.left) traverseHelper(node.left);
      if(node.right) traverseHelper(node.right);
      visitedNodeValues.push(node.val);
    }
    traverseHelper(currentNode);
    return visitedNodeValues;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */
  // line 251: Define variable node as this.root, because we are staring traversal at the root node
  // line 252: Define variable queue as an empty array where we will store the nodes in line to be visited during traversal
  // line 253: Define variable visitedNodes as an empty array where we will store the nodes that we have visied during traveral
  // line 254: Push the first node we want to visit in to the queue array
  // line 255: While there are nodes in the queue array ...
  // line 256: ... re-define node as the node at position 0 of the queue array, which is the node we arev visiting. 
  // line 257: Push node.val into the visitedNodes array, since we have now visited it.
  // line 258: If the node we just visited has a child node on the left...
  // line 259: ...push node.left into the queue array
  // line 261: If the node we just visited has a child node on the right...
  // line 262: ...push node.right into the queue array 
  // line 265: Once there are no more nodes in the queue array, we know we have visited all of the nodes in the tree,
  //        so we can return visitedNodes.

  bfs() {
    let node = this.root;
    let queue = [];
    let visitedNodes = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift()
      visitedNodes.push(node.val);
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
