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
      if (!root) {
        return false;
      }
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
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
  
    min(root) {
      if (!root.left) {
        return root.value;
      } else {
        return this.min(root.left);
      }
    }
  
    deleteNode(root, value) {
      if (!root) {
        return null;
      }
      if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.value) {
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
  
    levelOrder() {
      if (!this.root) {
        return;
      }
      let queue = [];
      queue.push(this.root);
      while (queue.length > 0) {
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
  
    height(root) {
      if (!root) {
        return 0;
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
  
    findClosestValue(target, root) {
      let closest = root.value;
      while (root != null) {
        if (Math.abs(target - closest) > Math.abs(target - root.value)) {
          closest = root.value;
        }
        if (target < root.value) {
          root = root.left;
        } else if (target > root.value) {
          root = root.right;
        } else {
          break;
        }
      }
      return closest;
    }
  }
  