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
     * @return {Number[]}
     */
    BFS() {
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
    /**
     * @return {Number[]}
     */
    DFSPreOrder() {
        var visited = [];
        var current = this.root;
        function traverse(node) {
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            return;
        }
        traverse(current);
        return visited;
    }
    /**
     * @return {Number[]}
     */
    DFSPostOrder() {
        var visited = [];
        var current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value);
            return;
        }
        traverse(current);
        return visited;
    }
    /**
     * @return {Number[]}
     */
    DFSInOrder() {
        var visited = [];
        var current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right);
            return;
        }
        traverse(current);
        return visited;
    }
    /**
     * @return {Number[][]}
     */
    levelOrder() {
        var current = this.root;
        if(!current) return [];
        var visited = [];
        function traverse(node, level) {
            if(visited.length < level) {
                visited.push([]);
            }
            visited[level - 1].push(node.value);
            if(node.left) traverse(node.left, level + 1);
            if(node.right) traverse(node.right, level + 1);
            return;
        }
        traverse(current, 1);
        return visited;
    }
    /**
     * @return {Boolean}
     */
    isValidBST() {
        var current = this.root;
        if(!current) return false;
        var lastVisited = null;
        function inorder(node) {
            if(node === null) return true;
            if(!inorder(node.left)) return false;
            if(lastVisited !== null && node.value <= lastVisited) {
                return false;
            }
            lastVisited = node.value;
            return inorder(node.right);
        }
        return inorder(current);
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(18);
tree.insert(9);
tree.insert(5);
tree.insert(12);
console.log(tree);
console.log(tree.levelOrder());
console.log(tree.isValidBST());