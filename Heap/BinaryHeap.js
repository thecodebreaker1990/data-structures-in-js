class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    build_max_heap(arr) {
        const midIndex = Math.floor(arr.length / 2);
        for(let i = midIndex; i >= 0 ; i--) {
            this.max_heapify(arr, i)
        }
        this.values = arr;
    }
    max_heapify(arr, i) {
        const element = arr[i];
        const leftIdx = 2 * i + 1, rightIdx = 2 * i + 2;
        let swap = null;
        let leftChild = -Infinity, rightChild = -Infinity;
        if(leftIdx < arr.length) {
            leftChild = arr[leftIdx];
            if(leftChild > element) swap = leftIdx;
        }
        if(rightIdx < arr.length) {
            rightChild = arr[rightIdx];
            if(rightChild > element && rightChild > leftChild) swap = rightIdx;
        }
        if(swap === null) return;
        if(swap !== null) {
            arr[i] = arr[swap];
            arr[swap] = element;
            this.max_heapify(arr, swap);
        }
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this;
    }
    findParent(idx) {
        return Math.floor((idx - 1) / 2);
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = this.findParent(index);
            const parent = this.values[parentIndex];
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        
        //Apply Sink down
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }
    sinkDown() {
        let i = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(i < length) {
            let leftIdx = 2 * i + 1, rightIdx = 2 * i + 2;
            let leftChild = -Infinity, rightChild = -Infinity;
            let swap = null;
            if(leftIdx < length) {
                leftChild = this.values[leftIdx];
                if(leftChild > element) {
                    swap = leftIdx;
                }
            }
            if(rightIdx < length) {
                rightChild = this.values[rightIdx];
                if(rightChild > element && rightChild > leftChild) {
                    swap = rightIdx;
                }
            }
            if(swap === null) break;
            this.values[i] = this.values[swap];
            this.values[swap] = element;
            i = swap;
        }
    }
}

const arr = [...Array(10)].map(el => Math.floor(Math.random() * 100) + 1);
const heap = new MaxBinaryHeap();
heap.build_max_heap(arr);
console.log(heap.extractMax());