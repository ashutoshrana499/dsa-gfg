// Implement a Stack using Linked List .
class StackNode {
    public data: number;
    public next: StackNode | null;
    constructor(a: number) {
        this.data = a;
        this.next = null;
    }
}

// tslint:disable-next-line: max-classes-per-file
class MyStack {
    public top: StackNode | null;
    public push(a: number) {
        // Add your code here
        if (this.top == null) {
            this.top = new StackNode(a);
        } else {
            const temp = new StackNode(a);
            temp.next = top;
            this.top = temp;
        }
    }
    public pop() {
        if ( this.top == null) {
            return -1;
        }
        const temp = this.top.next;
        const popped: StackNode = top;
        this.top = temp;
        return popped.data;
    }
}
