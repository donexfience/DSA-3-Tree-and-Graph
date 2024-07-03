class Graph {
  constructor() {
    this.adjsccencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjsccencyList[vertex]) {
      this.adjsccencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjsccencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjsccencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjsccencyList[vertex1].add(vertex2);
    this.adjsccencyList[vertex2].add(vertex1);
  }
  display() {
    for (let vertex in this.adjsccencyList) {
      console.log(vertex, "===>", [...this.adjsccencyList[vertex]]);
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjsccencyList[vertex1].delete(vertex2);
    this.adjsccencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjsccencyList[vertex]) {
      return;
    }
    for (let adjacencyList of this.adjsccencyList[vertex]) {
      this.removeEdge(vertex, adjacencyList);
    }
    delete this.adjsccencyList[vertex];
  }
  dfs(start) {
    const queue = [start];
    let visited = new Set();
    let result = [];
    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      this.adjsccencyList[vertex].forEach((neighbour) => {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
  bfs(start) {
    let queue = [start];
    let visited = new Set();
    let result = [];
    while (queue.length > 0) {
      let vertex = queue.pop();
      result.push(vertex);
      this.adjsccencyList[vertex].forEach((neighbour) => {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
  detectCycleUndirected(){
    const visited = new Set();
    const dfs = (vertex,parent)=>{
        visited.add(vertex);
        for(let neighbor of this.adjsccencyList[vertex]){
            if(!visited.has(neighbor)){
                if(dfs(neighbor,vertex)) return true;
            }
            else if(neighbor !==parent){
                return true;
            }
        }
        return false;
    }
    for(let vertex in this.adjsccencyList){
        if(!visited.has(vertex)){
            if(dfs(vertex,null)){
                return true;
            }
        }
    }
    return false;
  
  }
}
