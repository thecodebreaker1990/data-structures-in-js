class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp()
        return this;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const priorityElement = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return priorityElement;
    }
    sinkDown() {
        let i = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(i < length) {
            const leftIdx = 2 * i + 1, rightIdx = 2 * i + 2;
            let swap = null;
            let leftChildPriority = -Infinity, rightChildPriority = -Infinity;
            if(leftIdx < length) {
                ({ priority:leftChildPriority } = this.values[leftIdx]);
                if(element.priority > leftChildPriority) swap = leftIdx;
            }
            if(rightIdx < length) {
                ({ priority:rightChildPriority } = this.values[leftIdx]);
                if(element.priority > rightChildPriority && rightChildPriority < leftChildPriority) swap = rightIdx;
            }
            if(swap === null) break;
            this.values[i] = this.values[swap];
            this.values[swap] = element;
            i = swap;
        }
    }
}

const pQueue = new PriorityQueue();
pQueue.enqueue('Walk dogs', 2).enqueue('Pay bill', 1).enqueue('Do Workout', 0).enqueue('Learn new things', 1);
console.log(pQueue.dequeue());
pQueue.enqueue('take healthy foods', 1);
console.log(pQueue);