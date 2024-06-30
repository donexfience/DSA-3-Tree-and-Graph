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
      const node = new Node(value);
      if (this.isEmpty()) {
        this.root = node;
      } else {
        this.insertNewNode(this.root, node);
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
  
    search(root, value) {
      if (root === null) {
        return false;
      } else {
        if (root.value === value) {
          return true;
        } else if (value < root.value) {
          return this.search(root.left, value);
        } else {
          return this.search(root.right, value);
        }
      }
    }
  
    preOrder(root) {
      if (root) {
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
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
      const queue = [];
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
        return this.min(root.left);
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
      } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
      return root;
    }
  
    height(root) {
      if (!root) {
        return -1;
      }
      let leftHeight = this.height(root.left);
      let rightHeight = this.height(root.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  
    isBalanced(root) {
      if (!root) {
        return true;
      }
      let leftHeight = this.height(root.left);
      let rightHeight = this.height(root.right);
      let heightDiff = Math.abs(leftHeight - rightHeight) <= 1;
      return heightDiff && this.isBalanced(root.left) && this.isBalanced(root.right);
    }
  
    isBST(root, min = null, max = null) {
      if (!root) {
        return true;
      }
      if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
        return false;
      }
      return this.isBST(root.left,min,root.value) && this.isBST(root.right, root.value, max);
    }
  }
  
  // Usage
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(20);
  bst.insert(3);
  bst.insert(7);
  bst.insert(15);
  bst.insert(25);
  
  console.log(bst.isEmpty()); // false
  console.log(bst.search(bst.root, 23)); // false
  console.log(bst.search(bst.root, 20)); // true
  
  console.log("PreOrder Traversal:");
  bst.preOrder(bst.root); // Output: 10, 5, 3, 7, 20, 15, 25
  
  console.log("InOrder Traversal:");
  bst.inOrder(bst.root); // Output: 3, 5, 7, 10, 15, 20, 25
  
  console.log("PostOrder Traversal:");
  bst.postOrder(bst.root); // Output: 3, 7, 5, 15, 25, 20, 10
  
  console.log("LevelOrder Traversal:");
  bst.levelOrder(); // Output: 10, 5, 20, 3, 7, 15, 25
  
  console.log("Minimum Value:");
  console.log(bst.min(bst.root)); // Output: 3
  
  console.log("Maximum Value:");
  console.log(bst.max(bst.root)); // Output: 25
  
  console.log("Height of the tree:");
  console.log(bst.height(bst.root)); // Output: 2
  
  console.log("Is the tree balanced?");
  console.log(bst.isBalanced(bst.root)); // Output: true
  
  console.log("Is it a valid BST?");
  console.log(bst.isBST(bst.root)); // Output: true
  