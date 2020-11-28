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
        const newNode = new Node(val);
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
    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
    pop() {
        if(this.length === 0) return undefined;
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
}

const linkedList = new SinglyLinkedList();
linkedList.push("Hello");
linkedList.push("There");
linkedList.push("How");
linkedList.push("Are");
linkedList.push("You");
linkedList.push("?");
console.log(linkedList.pop());
console.log(linkedList);
