const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.prev =  this._tail;
            this._tail = node;

        }
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }
    at(index) {
        var node = this._head;
        for (var i = 0; i < index; i++) {
            node = node.next;
        }
        return node.data;
    }

    insertAt(index, data) {}

    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        else { 
            return false; 
        }
    }

    clear() {
        this.length = 0;
        this._tail.data = null;
        this._head.data = null;
    }

    deleteAt(index) {
        
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
