class Graph {
  constructor() {
    this.adjescencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjescencyList[vertex]) {
      this.adjescencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjescencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjescencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjescencyList[vertex1].add(vertex2);
    this.adjescencyList[vertex2].add(vertex1);
  }
  display() {
    for (let vertex in this.adjescencyList) {
      console.log(vertex, "   =   >", [...this.adjescencyList[vertex]]);
    }
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjescencyList[vertex1].has(vertex2) &&
      this.adjescencyList[vertex2].has(vertex2)
    );
  }
  removeEdge(vertex1, vertex2) {
    this.adjescencyList[vertex1].delete(vertex2);
    this.adjescencyList[vertex2].delete(vertex1);
  }
  reomveVertex(vertex) {
    if (!this.adjescencyList[vertex]) {
      return;
    }
    for (let adjescencyList of this.adjescencyList[vertex]) {
      this.removeEdge(vertex, adjescencyList);
    }
    delete this.adjescencyList[vertex]
  }
}
