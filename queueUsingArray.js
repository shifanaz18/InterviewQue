class Queue {
    constructor() {
        this.arr = {};
        this.front = 0;
        this.back = 0;
    }
    enqueue(data) {
        this.arr[this.back] = data;
        this.back++;
    }
    dequeue() {
        if (this.front == this.back) {
            throw "Queue is empty"
        }
        let a = this.arr[this.front];
        delete this.arr[this.front]
        this.front++;

        return a;
    }
    peek() {
        return this.arr[this.arr.length - 1]
    }

    print() {
        for (let i = this.front; i < this.back; i++) {
            console.log(this.arr[i]);

        }
    }
}
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.print();
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.dequeue();
console.log('deq', q.dequeue());

// q.peek();
console.log(q);