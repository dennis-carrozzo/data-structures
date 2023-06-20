class Queue {
  constructor () {
    this.queue = []
  }

  // Enqueue an element into the queue
  // Time complexity: O(1)
  // Space complexity: O(1)
  enqueue (element) {
    this.queue.push(element)
  }

  // Dequeue the front element from the queue
  // Time complexity: O(1)
  // Space complexity: O(1)
  dequeue () {
    return this.queue.shift()
  }

  // Get the front element of the queue without removing it
  // Time complexity: O(1)
  // Space complexity: O(1)
  front () {
    return this.queue[0]
  }

  // Check if the queue is empty
  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty () {
    return this.queue.length === 0
  }

  // Get the size of the queue
  // Time complexity: O(1)
  // Space complexity: O(1)
  size () {
    return this.queue.length
  }

  // Clear the queue
  // Time complexity: O(1)
  // Space complexity: O(1)
  clear () {
    this.queue = []
  }
}
