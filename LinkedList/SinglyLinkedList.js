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
    /**
     * @param {*} index
     * @param {*} value
     * @return {Boolean}
     */
    set(index, value) {
        var node = this.get(index);
        if(!node) return false;
        node.value = value;
        return true;
    }
     /**
     * @param {*} index
     * @param {*} value
     * @return {Boolean}
     */
    insert(index, value) {
        if(index < 0 && index > this.length) return false;
        if(index === 0) return !!this.unshift(value);
        else if(index === this.length) return !!this.push(value);
        else {
            var previousNode = this.get(index - 1);
            var newNode = new Node(value);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
            this.length++;
            return true;
        }
    }
     /**
     * @param {*} index
     * @return {Boolean}
     */
    remove(index) {
        if(index < 0 && index >= this.length) return undefined;
        if(index === 0) return this.shift();
        else if(index === this.length - 1) return this.pop();
        else {
            var previousNode = this.get(index - 1);
            var removedNode = previousNode.next;
            previousNode.next = removedNode.next;
            removedNode.next = null;
            this.length--;
            return removedNode;
        }
    }
    /**
     * @return {SinglyLinkedList}
     */
    reverse() {
        var current = this.head, prev = null, next = null;
        while(current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
        return this;
    }
    /**
     * @return {SinglyLinkedList}
     */
    reverseBetween(left, right) {
        var current = this.head, prev = null;
        
        //Move two pointers prev, current in their correct places
        while(left > 1) {
            prev = current;
            current = current.next;
            left--; right--;
        }

        //Store pointers in new variables
        var newHeadBefore = prev, newTailAfter = current;
        
        //reverse links in between left to right range
        while(right > 0) {
            var next = current.next;
            current.next = prev;
            prev = current; current = next;
            right--;
        }

        if(newHeadBefore !== null) {
            newHeadBefore.next = prev;
        } else {
            this.head = prev;
        }
        newTailAfter.next = current;

        return this.head;
    }
    /**
     * @return {SinglyLinkedList}
     */
    swapPairs() {
        var current = this.head;
        function swapRecursiveHelper(node) {
            if(!node || !node.next) return node;
            var newHead = node.next;
            node.next = swapRecursiveHelper(newHead);
            newHead.next = node;
            return newHead;
        }
        return swapRecursiveHelper(current);
    }
    /**
     * @return {SinglyLinkedList}
     */
    /**
        1. Initialise a temp variable pointing at current head

        2. Create a prev node by passing a value -1

        3. Run a loop until end of list - Check if node pointed by temp and value to be removed are same
            3.1 If yes - 
                i. check if prev is still -1, then we need to remove first node. so update newHead by temp.next
                ii. if not then updated prev.next by temp.next
            
            3.2 If no - then update prev by temp

            3.3 Update temp by temp.next

        4. return this
    */
    removeElement(element) {
        var current = this.head;
        var prev = new Node(-1);
        while(current) {
            if(element === current.value) {
                if(prev.value === -1) this.head = current.next; //update head
                else prev.next = current.next;
                if(current.next === null) this.tail = prev; //update tail
                this.length--;
            } else {
                prev = current;
            }
            current = current.next;
        }
        return this;
    }
}

const linkedList = new SinglyLinkedList();
linkedList.push(1).push(2).push(6).push(3).push(4).push(5).push(6);
linkedList.traverse();
linkedList.reverseBetween(2, 4);
