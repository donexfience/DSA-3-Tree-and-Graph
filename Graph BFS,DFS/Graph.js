class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
  
    display() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex, "----->", [...this.adjacencyList[vertex]]);
      }
    }
  
    bfs(start) {
      const queue = [start];
      const result = [];
      const visited = new Set();
      visited.add(start);
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);
  
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        });
      }
  
      return result;
    }
  
    dfs(start) {
      const stack = [start];
      const result = [];
      const visited = new Set();
      visited.add(start);
  
      while (stack.length > 0) {
        const vertex = stack.pop();
        result.push(vertex);
  
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            stack.push(neighbor);
          }
        });
      }
  
      return result;
    }
  }
  
  // Example usage:
  const g = new Graph();
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addEdge("A", "B");
  g.addEdge("B", "C");
  g.addEdge("C", "A");
  g.display();
  
  console.log("BFS:", g.bfs("A")); // BFS: [ 'A', 'B', 'C' ]
  console.log("DFS:", g.dfs("A")); // DFS: [ 'A', 'C', 'B' ]
  