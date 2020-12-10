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
    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        function insertRecursiveHelper(node, newNode) {
            if(newNode.value >= node.value) {
                if(node.right) return insertRecursiveHelper(node.right, newNode);
                node.right = newNode; 
                return this;
            } else {
                if(node.left) return insertRecursiveHelper(node.left, newNode);
                node.left = newNode; 
                return this;    
            }
        }
        return insertRecursiveHelper(this.root, newNode);
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(18);
tree.insert(9);
console.log(tree);