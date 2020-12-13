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
    /**
     * @param {*} value
     * @return {BinarySearchTree}
     */
    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        function recursiveInsertHelper(node, newNode) {
            if(newNode.value >= node.value) {
                if(node.right) return recursiveInsertHelper(node.right, newNode);
                node.right = newNode; 
                return this;
            } else {
                if(node.left) return recursiveInsertHelper(node.left, newNode);
                node.left = newNode; 
                return this;    
            }
        }
        return recursiveInsertHelper(this.root, newNode);
    }
    /**
     * @param {*} value
     * @return {Null | Node}
     */
    search(value) {
        if(!this.root) return null;
        function recusriveSearchHelper(node, value) {
            if(node === null) return null;
            else if(node.value === value) return node;
            else if(value < node.value) return recusriveSearchHelper(node.left, value);
            else return recusriveSearchHelper(node.right, value);
        }
        return recusriveSearchHelper(this.root, value);
    }
    /**
     * @return {Node[]}
     */
    bfs() {
        var queue = [], visited = [], node;
        if(!this.root) return visited;
        queue.push(this.root);
        while(queue.length > 0) {
            node = queue.shift();
            visited.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return visited;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(18);
tree.insert(9);
console.log(tree);
console.log(tree.search(15));
console.log(tree.bfs());