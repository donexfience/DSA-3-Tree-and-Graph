class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        }
        else{
            this.insertNewNode(this.root,node)
        }
    }
    insertNewNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }
            else{
                this.insertNewNode(root.left,node)
            }
        }
        else{
            if(root.right === null){
                root.right = node;
            }
            else{
                this.insertNewNode(root.right,node);
            }
        }
    }
    search(root,value){
        if(root === null){
            return false;
        }
        else{
            if(root.value === value){
                return true;
            }
            else if(value < root.value){
                return this.search(root.left,value);
            }
            else{
                return this.search(root.right,value);
            }
        }
    }
    PreOrder(root){
        if(root){
            console.log(root.value);
            this.PreOrder(root.left);
            this.PreOrder(root.right);
        }
    }
    InOrder(root){
        if(root){
            this.InOrder(root.left);
            console.log(root.value);
            this.InOrder(root.right);
        }
    }
    PostOrder(root){
        if(root){
            this.PostOrder(root.left);
            this.PostOrder(root.right);
            console.log(root.value)
        }
    }
    levelOrder(){
        if(!this.root){
            return 
        }
        let queue =[];
        queue.push(this.root);
        while(queue.length){
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
    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }
    deleteNode(root,value){
        if(root === null){
            return false;
        }
        else{
            if(value < root.value){
                root.left = this.deleteNode(root.left,value)
            }
            else if(value > root.value){
                root.right = this.deleteNode(root.right,value)
            }
            else{
                if(!root.left && root.right){
                    return null;
                }
                if(!root.left){
                    return root.right;
                }
                else if(!root.right){
                    return root.left
                }
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right,value)
        }
        return root;
    }
}

