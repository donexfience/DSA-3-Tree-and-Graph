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
        return this.insertNewNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        return this.insertNewNode(root.right, node);
      }
    }
  }
  Search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.Search(root.left, value);
      } else {
        return this.Search(root.right, value);
      }
    }
  }
  PreOrder(root) {
    console.log(root.value);
    this.PreOrder(root.left);
    this.PreOrder(root.right);
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  PostOrder(root){
    if(root){
        this.PostOrder(root.right);
        this.PostOrder(root.left);
        console.log(root.value)
    }
  }
  levelOrder(){
    let queue =[];
    queue.push(this.root)
    while(queue.lenght){
        let curr = queue.shift();
        console.log(curr.value)
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
  }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(22);
bst.insert(13);
console.log(bst.isEmpty())
console.log(bst.Search(bst.root,23));
// bst.PostOrder(bst.root);
bst.levelOrder()