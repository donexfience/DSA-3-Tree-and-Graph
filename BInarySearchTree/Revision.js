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
      this.insertNew(this.root, node);
    }
  }
  insertNew(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNew(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNew(root.right, node);
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
  PostOrder(root) {
    if (root) {
      this.PostOrder(root.left);
      this.PostOrder(root.right);
      console.log(root.value);
    }
  }
  min(root) {
    if (!root.left) {
      return false;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return false;
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
      root.rgiht - this.delete(root.right, value);
    } else {
      if (!root.left) {
        return root.rgiht;
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
    let HeightDiff = Math.abs(leftHeight, rightHeight) <= 1;
    return (
      HeightDiff && this.isBalanced(root.left) && this.isBalanced(root.right)
    );
  }
  isBST(root, min = null, max = null) {
    if (!root) {
      return true;
    } else {
      if (
        (min != null && root.value < min) ||
        (max != null && root.value > max)
      ) {
        return false;
      }
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
    return closest
  }
}

