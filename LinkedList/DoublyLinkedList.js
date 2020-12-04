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
}

const linkedList = new DoublyLinkedList();
linkedList.push(10);
linkedList.push(20);
linkedList.push(30);
linkedList.push(40);
console.log(linkedList.shift());
console.log(linkedList.unshift(15));
