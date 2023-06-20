class Node {
  constructor (value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // Append a node at the end of the doubly linked list
  // Time complexity: O(1)
  // Space complexity: O(1)
  append (value) {
    const newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  // Prepend a node at the beginning of the doubly linked list
  // Time complexity: O(1)
  // Space complexity: O(1)
  prepend (value) {
    const newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
  }

  // Insert a node at a specific position in the doubly linked list
  // Time complexity: O(n)
  // Space complexity: O(1)
  insert (index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Invalid index')
    }

    if (index === 0) {
      this.prepend(value)
      return
    }

    if (index === this.length) {
      this.append(value)
      return
    }

    const newNode = new Node(value)
    let current = this.head
    let currentPosition = 0

    while (currentPosition < index) {
      current = current.next
      currentPosition++
    }

    newNode.prev = current.prev
    newNode.next = current
    current.prev.next = newNode
    current.prev = newNode

    this.length++
  }

  // Remove a node at a specific position in the doubly linked list
  // Time complexity: O(n)
  // Space complexity: O(1)
  remove (index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index')
    }

    let current = this.head
    let currentPosition = 0

    if (index === 0) {
      this.head = current.next
      if (index === this.length - 1) {
        this.tail = null
      } else {
        this.head.prev = null
      }
    } else if (index === this.length - 1) {
      current = this.tail
      this.tail = current.prev
      this.tail.next = null
    } else {
      while (currentPosition < index) {
        current = current.next
        currentPosition++
      }
      current.prev.next = current.next
      current.next.prev = current.prev
    }

    this.length--
  }

  // Get the value at a specific position in the doubly linked list
  // Time complexity: O(n)
  // Space complexity: O(1)
  get (index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index')
    }

    let current = this.head
    let currentPosition = 0

    while (currentPosition < index) {
      current = current.next
      currentPosition++
    }

    return current.value
  }

  // Update the value at a specific position in the doubly linked list
  // Time complexity: O(n)
  // Space complexity: O(1)
  update (index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index')
    }

    let current = this.head
    let currentPosition = 0

    while (currentPosition < index) {
      current = current.next
      currentPosition++
    }

    current.value = value
  }

  // Check if the doubly linked list is empty
  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty () {
    return this.length === 0
  }

  // Get the size of the doubly linked list
  // Time complexity: O(1)
  // Space complexity: O(1)
  size () {
    return this.length
  }

  // Convert the doubly linked list into an array
  // Time complexity: O(n)
  // Space complexity: O(n)
  toArray () {
    const array = []
    let current = this.head

    while (current !== null) {
      array.push(current.value)
      current = current.next
    }

    return array
  }

  // Clear the doubly linked list
  // Time complexity: O(1)
  // Space complexity: O(1)
  clear () {
    this.head = null
    this.tail = null
    this.length = 0
  }
}
