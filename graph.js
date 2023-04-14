class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // line 15: This function accepts a Node instance and adds it to the nodes property on the graph
  // line 16: The vertex is added via the .add() method for a JavaScript Set
  addVertex(vertex) {
    this.nodes.add (vertex);
  }

  // line 22: This function accepts an array of Node instances and adds them to the nodes property on the graph
  // line 23: Here we are looping through the inputted array
  // line 24: For each vertex, we are calling the addVertex(vertex) method that we just defined above.
  addVertices(vertexArray) {
    for(let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // line 32: This function accepts two vertices and updates their adjacent values to include the other vertex
  //          since each node has it's own set of adjacent values...
  // line 33: ...we are adding the second vertex to the adjacent values set of the first vertex,
  // line 34: and vice versa.
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // line 41: This function accepts two vertices and updates their adjacent values to remove the other vertex.  It is
  //          similar to the above addEdge function, however...
  // line 42: ...instead of adding the second vertex to the adjacent values set of the first vertex we are deleting the value, 
  // line 43: And vice versa
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // line 53: This function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  // line 54: Here we are looping through the set of nodes (this.nodes) contained in the graph.  
  // line 55: We use the .has() JavaScript Set method to check if the node to be removed is in the adjacency set of any of the other vertices 
  //          in the graph. If so...
  // line 56: ...the vertex is deleted from that node's adjacency set.  
  // line 59: Once the vertex is deleted from all of the appropriate adjacent sets, it is then deleted from the set of nodes forthe entire 
  //          graph using the .delete() JavaScript Set method.
  removeVertex(vertex) {
    for(let node of this.nodes) {
      if(node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex)
  }

  // line 80: his function returns an array of Node values using DFS
  // line 81: First we define a new Set called "visited" that will store all of the nodes, 
  //        that have been seen, so that we don't visit any node more than once.
  // line 82: Then we define a new array called "result" that will store the values of the 
  //        nodes in the graph
  // line 84: Next we define the function traverse(vertex) that takes in a vertex from the graph
  // line 85: If there is no vertex...
  // line 86: the function returns null because there are no values
  // line 88: Otherwise we add the vertex to the visited set
  // line 89: And then we push the vertex's value to the result array
  // line 91: Next we look at that vertex's adjacent nodes (contained in the adjacency set) via the 
  //        JavaScript Set method, .forEach()
  // line 92: For each node in vertex's adjacency set, first we check to see if that node is contained
  //        in the visited set.  If not...
  // line 93: ... we return calling traverse(vertex) on that node.
  // line 97: Now that the traverse() function is fully defined, we take the input, "start", and call
  //        the traverse(vertex) function with it
  // line 98: Once we have traversed the entire graph, we then return the result array.
  depthFirstSearch(start) {
    let visited = new Set();
    let result = [];

    const traverse = (vertex) => {
      if (!vertex) {
        return null;
      }
      visited.add(vertex);
      result.push(vertex.value);

      vertex.adjacent.forEach(neighbor => {
      if(!visited.has(neighbor)) {
        return traverse(neighbor);
      }
    });
  }
  traverse(start);
  return result;
  }

  // line 120: This function returns an array of Node values using BFS
  // line 121: First we define the array "queue" as where we will be storing nodes to be visited. 
  //        It first contains the input node because that is where we will begin searching
  // line 122: We define the array "result" as where we will be storing the values of the nodes we visit
  // line 123: Then we define a new set, visited, that will store the nodes we have already seen so that 
  //        we don't visit any node more than once
  // line 124: Then we define the variable currentVertex, which will hold the vertex we are looking at.  
  //        It has no value upon initialization
  // line 126: We then add the "start" (inputted) node to the visited set using the JavaScript .has() set method.
  // line 128: While the queue array has a length (meaning while there are nodes in the queue)...
  // line 129: ...we define currentVertex as the first node in the queue array, which we remove from the array
  //        using the .shift() array method.
  // line 130: then we push the value of currentVertex into the result array
  // line 132: Next, we look at each node in the adjacency set for currentVertex, and using the .forEach() 
  //        JavaScript set method, for each node in the adjacency set...
  // line 133: ...we check to see if that node (called neighbor) is in the visited set using the .has() set method.  If so...
  // line 134: ...we add neighbor to the visited set...
  // line 135: ...and we push neighbor into the queue array
  // line 139: Once we have traversed the whole graph, we return the result array.
  breadthFirstSearch(start) {
    let queue = [start];
    let result = [];
    let visited = new Set();
    let currentVertex;

    visited.add(start);

    while(queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex.value);
      
      currentVertex.adjacent.forEach(neighbor => {
        if(!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

module.exports = {Graph, Node};