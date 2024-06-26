class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
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
  PreOrder(root) {
    if (root) {
      console.log(root.value);
      this.PreOrder(root.left);
      this.PreOrder(root.right);
    }
  }
  InOrder(root) {
    if (root) {
      this.InOrder(root.left);
      console.log(root.value);
      this.InOrder(root.right);
    }
  }
  PostOrder(root) {
    if (root) {
      this.PostOrder(root.left);
      this.PostOrder(root.right);
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
  delete(value) {
    this.root = this.deleteNode(this.root, value);
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
      // Node with only one child or no child
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      // Node with two children: Get the inorder successor (smallest in the right subtree)
      root.value = this.min(root.right);
      // Delete the inorder successor
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
  isBalanced(root){
    if(!root){
        return false;
    }
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);
    let HeightDiff = Math.abs(leftHeight,rightHeight) <=1;
    return HeightDiff && this.isBalanced(root.left) && this.isBalanced(root.right);
  }
  iSBsT(root,min=null,max=null){
    if(!root){
        return true;
    }
    if((min !== null && root.value < min )|| (max !=null  && root.value >= max)){
        return false;
    }

  }
  iSBsT(root,min=null,max=null){
    if(!root){
        return true;
    }
    if((min!==null && root.value < min)||(max!=null && root.value >=max)){
        return false;
    }
  }
  findTheClosestValue(root,target){
    let closest = root.value;
    while(root !==null){
        if(Math.abs(target-closest) > Math.abs(target-root.value)){
            closest = root.value;
        }
        if(target < root.value){
            root = root.left;
        }
        else if(target > root.value){
            root = root.right
        }
        else{
            break;
        }
    }
    return closest;
  }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(8);
bst.insert(4);
bst.insert(3);
bst.insert(5);
const resutl = bst.height(bst.root);
console.log(resutl);
