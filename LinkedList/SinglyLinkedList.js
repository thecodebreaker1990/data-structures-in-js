class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
     /**
     * @param {*} val
     * @return {SinglyLinkedList}
     */
    push(val) {
        const newNode = new Node(val);
        //Check if this node is the first element in the linkedList
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
    /**
     * @return {Node}
     */
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next !== null) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    /**
     * @return {Node}
     */
    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        currentHead.next = null;
        return currentHead;
    }
    /**
     * @param {*} val
     * @return {SinglyLinkedList}
     */
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    /**
     * @param {*} index
     * @return {Node}
     */
    get(index) {
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
}

const linkedList = new SinglyLinkedList();
linkedList.push("Hello");
linkedList.push("There");
linkedList.push("How");
linkedList.push("Are");
linkedList.push("You");
linkedList.push("?");
console.log(linkedList.unshift("Folks"));
console.log(linkedList.get(2));
