class Stack {
    constructor() {
        this.arr = [];
        this.top = -1
    }
    push(data) {
        this.top++
        this.arr[this.top] = data;

    }
    pop() {
        let e = this.arr[this.top]
        if (this.top == -1) {
            console.log('pop ni hopayega!')
            return;
        }

        this.top--;
        return e;
    }
    peek() {
        console.log(this.arr)
        return this.arr[this.top];
    }
}

let s1 = new Stack();
s1.push('1')
s1.push('12')
s1.push('3')
s1.pop();
s1.pop();
s1.pop();
s1.pop();
s1.pop();
s1.push('3')
console.log(s1.peek())



//////////////////
class Stack {
    constructor() {
        this.arr = {},
            this.top = -1
    }

    push(data) {
        this.top++
        this.arr[this.top] = data;
    }

    pop() {
        if (this.top == -1) {
            console.log("array is empty")
        }
        let a = this.arr[this.top];
        delete this.arr[this.top]
        this.top--
        return a;
    }

    peek() {
        return this.arr[this.top]
    }

    print() {
        for (let i = 0; i <= this.top; i++) {
            console.log(this.arr[i]);

        }
    }
}


let s = new Stack();
s.push('a')
s.push('b')
s.push('c')
// console.log(s.peek());
// s.pop()
// console.log(s.peek());
s.pop()
//s.push('shifa')
//console.log(s.peek());
s.print()