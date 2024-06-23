class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      return this.insertNewNode(this.root, newNode);
    }
  }
  insertNewNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNewNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNewNode(root.right, node);
      }
    }
  }
  Search(root, value) {
    if (!root) {
      return false;
    } else if (value === root.value) {
      return true;
    } else if (value < root.value) {
      return this.Search(root.left, value);
    } else if (value > root.value) {
      return this.Search(root.right, value);
    }
  }
  PreOrder(root) {
    if (root) {
      console.log(root.value);
      this.PreOrder(root.left);
      this.PreOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  levelOrder() {
    if (!this.root) {
      return;
    }
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  deleteNode(root, value) {
    if (root === null) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    }
    if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(22);
bst.insert(15);
bst.insert(18);
bst.inOrder(bst.root);
console.log("minimum value");
let min = bst.min(bst.root);
console.log(min);
let max = bst.max(bst.root);
console.log("maximum value");
console.log(max);
let ps = bst.deleteNode(bst.root, 18);
bst.PreOrder(bst.root);
