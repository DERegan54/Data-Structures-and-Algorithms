/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }


  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  // line 38: Define minDepth as 0.  
  // line 39: If there is no root value, return minDepth
  // line 40: Define minDepthHelper(node) function
  // line 41: If the root has no children, 
  // line 42: let minDepth = 1;
  // line 43: return minDepth;
  // line 45: If node.left has no children and node.right does have children...
  // line 46: minDepth = the result of calling minDepthHelper recursively on node.right and adding 1
  // line 47: return minDepth;
  // line 49: If node.right has no children and node.left does have children...
  // line 50: minDepth = the result of calling minDepthHelper recursively on node.right and adding 1
  // line 51: return minDepth;
  // line 53: If both node.right and node.left have children
  // line 54: minDepth = the result of calling Math.min() on minDepthHelper(node.right) and minDepthHelper(node.left), and then adding 1 
  // line 55: return minDepth;
  // line 58: return the result of calling minDepthHelper(node) on this.root.
  // O(1) space-time?

  minDepth () {
    let minDepth = 0;
    if(!this.root) return minDepth;
    const minDepthHelper = (node) => {
      if(node.left === null && node.right === null){
        let minDepth = 1;
        return minDepth;
      } 
      if (node.left === null && node.right !== null){
        minDepth =  minDepthHelper(node.right) + 1;
        return minDepth;
      } 
      if (node.right === null && node.left !== null){
        minDepth =  minDepthHelper(node.left) + 1;
        return minDepth;
      } 
      if (node.right !== null && node.left !==null) {
        minDepth =  (Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1);
        return minDepth;
      }
    }
    return minDepthHelper(this.root);
  }
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  // line 83: Define maxDepth as 0.  
  // line 84: If there is no root value, return maxDepth
  // line 85: Define maxDepthHelper(node) function
  // line 86: If the root has no children, 
  // line 87: let maxDepth = 1;
  // line 88: return maxDepth;
  // line 90: If node.left has no children and node.right does have children...
  // line 91: maxDepth = the result of calling maxDepthHelper recursively on node.right and adding 1
  // line 92: return maxDepth;
  // line 94: If node.right has no children and node.left does have children...
  // line 95: maxDepth = the result of calling maxDepthHelper recursively on node.right and adding 1
  // line 96: return maxDepth;
  // line 98: If both node.right and node.left have children
  // line 99: maxDepth = the result of calling Math.max() on maxDepthHelper(node.right) and maxDepthHelper(node.left), and then adding 1 
  // line 100: return maxDepth;
  // line 103: return the result of calling maxDepthHelper(node) on this.root.
  // O(1) space-time?

  maxDepth() {
    let maxDepth = 0;
    if(!this.root) return maxDepth;
    const maxDepthHelper = (node) => {
      if(node.left === null && node.right === null){
        let maxDepth = 1;
        return maxDepth;
      } 
      if (node.left === null && node.right !== null){
        maxDepth =  maxDepthHelper(node.right) + 1;
        return maxDepth;
      } 
      if (node.right === null && node.left !== null){
        maxDepth =  maxDepthHelper(node.left) + 1;
        return maxDepth;
      } 
      if (node.right !== null && node.left !==null) {
        maxDepth =  (Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1);
        return maxDepth;
      }
    }
    return maxDepthHelper(this.root);
  }


  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  // line : Define variable maxSum as 0
  // line : Define maxSumHelper(node) function
  // line : If node has no value
  // line : let maxSum = 0
  // line : return maxSum
  // line : Define variable rightSum as the result of calling maxSumHelper(node) recursively on node.right
  // line : Define variable leftSum as the result of calling maxSumHelper(node) recursively on node.left
  // line : re-define maxSum as the result of calling Math.max() on maxSum, node.val + rightSum, and node.val + leftSum
  // line : return the result of calling Math.max() on 0, leftSum + node.val, and rightSum + node.val
  // line : Call maxSumHelper(node) on this.root
  // line : Return maxSum
  maxSum() {
    let maxSum = 0;
    const maxSumHelper = (node) => {
      if (node === null) {
        let maxSum = 0;
        return maxSum;
      }
      let rightSum = maxSumHelper(node.right);
      let leftSum = maxSumHelper(node.left);
      maxSum = Math.max(maxSum, node.val + rightSum + leftSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }
    maxSumHelper(this.root);
    return maxSum;
  }

  

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  // line 156: If there is no root value, return null
  // line 157: Define variable queue as an array containing this.root
  // line 158: Define variable closest as null, for the time being
  // line 159: While the queue array has items in it
  // line 160: Define variable currentNode as the value that is shifted out of queue array (from the front)
  // line 161: Define variable currentVal as the value of currentNode (currentNode.val)
  // line 162: Define variable higherThanLB as currentVal IF it is greater than lowerBound
  // line 163: Define variable needNewClosest as either currentVal IF it is less than closest, or if closest = null
  // line 164: If currentVal is higher than lowerBound AND closest is either null or greater than currentVal
  // line 165: Re-define closest as currentVal
  // line 167: If currentNode has a child node on the left (currentNode.left), 
  // line 168: Push currentNode.left into the queue array
  // line 170: If currentNode has a child node on the right (currentNode.right),
  // line 171: Push currentNode.right into the queue array
  // line 174: Return closest 
  nextLarger(lowerBound) {
    if(!this.root) return null;
    let queue = [this.root];
    let closest = null;
    while(queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLB = currentVal > lowerBound;
      let needNewClosest = currentVal < closest || closest === null;
      if(higherThanLB && needNewClosest) {
        closest = currentVal;
      }
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return closest;
  }

  // nextLarger(lowerBound) {
  //   if (!this.root) return null;

  //   // let's use BFS for this!
  //   let queue = [this.root];
  //   let closest = null;

  //   while (queue.length) {
  //     let currentNode = queue.shift();
  //     let currentVal = currentNode.val;
  //     let higherThanLowerBound = currentVal > lowerBound;
  //     let shouldReassignClosest = currentVal < closest || closest === null;

  //     if (higherThanLowerBound && shouldReassignClosest) {
  //       closest = currentVal;
  //     }

  //     if (currentNode.left) queue.push(currentNode.left);
  //     if (currentNode.right) queue.push(currentNode.right);
  //   }

  //   return closest;
  // }
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
