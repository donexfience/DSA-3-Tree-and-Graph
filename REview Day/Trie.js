class Node {
  constructor() {
    this.children = {};
    this.endWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children[char]) {
        currentNode.chidren[char] = new Node();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.endWord = true;
  }
  Search(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return (currentNode.endWord = true);
  }
  startsWith(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return true;
  }
  autoComplete(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        return false;
      }
      curr = curr.children[char];
    }
    let result = [];
    this.collection(curr, word, result);
    return result;
  }
  collection(node,word,list){
    if(node.endWord){
        result.push(word)
    }
    for(let char in node.chidren)[
        this.collection(node.children[char],word + char,list)
    ]
  }
}
