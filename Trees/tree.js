/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  // line 28: If there is no root, return 0
  // line 29: define sum as the value of the root node to start
  // line 31: the function sumNext takes in a node
  // line 32: if the node doesn't have any children return the sum
  // line 35-36: else loop through the child nodes and add their values
  //        to the sum.
  // line 37: if there are children of those child nodes, call sumNext() 
  //        on the children, etc.
  // line 43: call sumNext() on the root value 
  // line 44: return sum
  
  sumValues() {
    if(!this.root) return 0;
    let sum = this.root.val;

    const sumNext = (node) => {
      if (node.children.length === 0) {
        return sum;
      } else {
        for(let child of node.children) {
          sum += child.val;
          if(child.children.length > 0) {
            sumNext(child);
          }
        }
      }
    }
    sumNext(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  // line 58: If there is no root, return 0
  // line 59: define count as 0
  // line 61: the addWhenEven(node) function 
  // line 62: loop through the children of node
  // line 63: if the value of the child is divisible by 2, add 1 to count
  // line 64-65: if the child has children, call addWhenEven(node) on the children
  // line 69: call addWhenEven(node) on the root node
  // line 70: return count

  countEvens() {
    if(!this.root) return 0;
    let count = 0;

    const addWhenEven = (node) =>{
      for (let child of node.children) {
        if (child.val % 2 === 0) count ++;
        if (child.children.length !== 0) {
          addWhenEven(child);
        }
      }
    }
    addWhenEven(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  // line 86: If there is no root, return 0
  // line 87: define count as 0
  // line 88: if the value of the root node is greater than lowerBound, add 1 to count
  // line 90: define countWhenGreater(node)
  // line 91: loop through the children of node
  // line 92: if the value of the child is greater than lowerBound, add 1 to count
  // line 93-94: if those children have children, call countWhenGreater on those children
  // line 98: call countWhenGreater(node) on the root node
  // line 99: return count

  numGreater(lowerBound) {
    if(!this.root) return 0;
    let count = 0;
    if(this.root.val > lowerBound) count ++;
    
    function countWhenGreater(node) {
      for(let child of node.children) {
        if(child.val > lowerBound) count ++;
        if(child.children.length !== 0) {
          countWhenGreater(child)
        }
      }
    }
    countWhenGreater(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
