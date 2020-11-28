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
    push(val) {
        const newNode = new newNode(val);
        //Check if this node is the first element in the linkedList
        if(this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const linkedList = new SinglyLinkedList();
linkedList.push(5);
linkedList.push(50);
linkedList.push(100);
console.log(linkedList);
