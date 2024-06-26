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
      this.insertNewNode(this.root, newNode);
    }
  }
  insertNewNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNewNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNewNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
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
  PostOrder(root) {
    if (root) {
      this.PostOrder(root.left);
      this.preOrder(root.right);
      console.log(root.value);
    }
  }
  findTheClosestValue(root, target) {
    let closest = root.value;
    while (root !== null) {
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
  height(root) {
    if (!root) {
      return false;
    }
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);
    return Math.max(leftHeight, rightHeight) + 1;   
  }
  isBalanced(root) {
    if (!root) {
      return false;
    }
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);
    let heightDiff = Math.abs(leftHeight, rightHeight) <= 1;
    return (
      heightDiff && this.isBalanced(root.left) && this.isBalanced(root.right)
    );
  }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(22);
bst.insert(13);
console.log(bst.isEmpty());
console.log(bst.search(bst.root, 23));
