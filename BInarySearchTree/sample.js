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
      } else if (root.value === value) {
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
  
    levelOrder() {
      if (!this.root) return;
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
    deleteNode(root,value){
        if(root === null){
            return null;
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right,value)
        }
        return root;
    }
  }
  
  // Usage
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(20);
  bst.insert(30);
  bst.insert(40);
  bst.insert(50);
  
  console.log(bst.isEmpty()); // false
  console.log(bst.search(bst.root, 23)); // false
  console.log(bst.search(bst.root, 20)); // true
  
  console.log("PreOrder Traversal:");
  bst.preOrder(bst.root); // Output: 10, 5, 20, 13, 22
  
  console.log("InOrder Traversal:");
  bst.inOrder(bst.root); // Output: 5, 10, 13, 20, 22
  
  console.log("PostOrder Traversal:");
  bst.postOrder(bst.root); // Output: 5, 13, 22, 20, 10
  
  console.log("LevelOrder Traversal:");
  bst.levelOrder(); // Output: 10, 5, 20, 13, 22
  
  console.log("Minimum Value:");
  console.log(bst.min(bst.root)); // Output: 5
  
  console.log("Maximum Value:");
  console.log(bst.max(bst.root)); // Output: 22
  