class Node {
    constructor(head = null) {
        this.head = head;
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
        this.tail = null
    }
    size() {
        let count = 0
        let node = this.head

        while (node != null) {
            count++
            node = node.next
        }
        return count
    }

    getLast() {
        return tail
    }

    isEmpty() {
        return this.head === null
    }

    addToFront(node) {
        if (this.head === null) {
            this.head = node
            this.tail = node
            return
        }
        node.next = this.head
        this.head = node
    }

    addToBack(node) {
        this.tail.next = node
        this.tail = node
    }

    insertAt(node, position) {

    }

    removeAt(position) {

    }
}

let list = new LinkedList()
list.addToFront(new Node('Rola'))
list.addToBack(new Node('Vinson'))

console.log(list.size())




