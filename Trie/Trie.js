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
        currentNode.children[char] = new Node();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.endWord = true;
  }
  search(word) {
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
      currentNode = currentNode.children[word];
    }
    return true;
  }
  autoComplete(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.child[char]) {
        return [];
      }
      currentNode = currentNode.child[char];
    }
  }
  collection(node, word, list) {
    if (node.endWord) {
      list.push(word);
    }
    for (let char in node.children) {
      this.collection(node.children[char], word + char, list);
    }
  }
}
