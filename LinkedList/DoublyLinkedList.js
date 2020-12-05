class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * @param {*} val
     * @return {DoublyLinkedList}
     */
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
     /**
     * @return {Node}
     */
    pop() {
        if(!this.head) return undefined;
        const poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null; this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    /**
     * @return {Node}
     */
    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        if(this.length === 1) {
            this.head = null; this.tail = null;
        } else {
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.next = null;
        }
        this.length--;
        return currentHead;
    }
    /**
     * @param {*} val
     * @return {DoublyLinkedList}
     */
    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        this.head = newNode;
        this.length++;
        return this;
    }
    /**
     * @param {*} index
     * @return {Node}
     */
    get(index) {
        if(index < 0 || index >= this.length) return null;
        var mid = Math.floor(this.length / 2);
        var counter, current;
        if(index <= mid) {
            counter = 0;
            current = this.head;
            while(counter !== index) {
                current = current.next;
                counter++;
            }
        } else if(index > mid) {
            counter = this.length - 1;
            current = this.tail;
            while(counter !== index) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    /**
     * @param {*} index
     * * @param {*} val
     * @return {Boolean}
     */
    set(index, val) {
        var node = this.get(index);
        if(node) {
            node.value = val;
            return true;
        }
        return false;
    }
}

const linkedList = new DoublyLinkedList();
linkedList.push(13);
linkedList.push(27);
linkedList.push(72);
linkedList.push(31);
linkedList.push(56);
linkedList.push(10);
linkedList.push(100);
console.log(linkedList.get(6));
linkedList.set(6, 150);
console.log(linkedList);
