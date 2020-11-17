class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}



class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    if (!this.first) {
      return null;
    }
    return this.first.value;
  }

  all() {
    const arr = []

    if (!this.first) {
      return null;
    }

    let first = this.show();

    do {
      let val = this.dequeue();
      arr.push(val)

      this.enqueue(val);
    }
    while (this.show() !== first)
    return arr;
  }
}

module.exports = Queue
