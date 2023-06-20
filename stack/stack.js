class Stack {
  constructor () {
    this.stack = []
  }

  // Push an element onto the stack
  // Time complexity: O(1)
  // Space complexity: O(1)
  push (element) {
    this.stack.push(element)
  }

  // Pop the top element from the stack
  // Time complexity: O(1)
  // Space complexity: O(1)
  pop () {
    return this.stack.pop()
  }

  // Get the top element of the stack without removing it
  // Time complexity: O(1)
  // Space complexity: O(1)
  peek () {
    return this.stack[this.stack.length - 1]
  }

  // Check if the stack is empty
  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty () {
    return this.stack.length === 0
  }

  // Get the number of elements in the stack
  // Time complexity: O(1)
  // Space complexity: O(1)
  size () {
    return this.stack.length
  }

  // Clear the stack
  // Time complexity: O(1)
  // Space complexity: O(1)
  clear () {
    this.stack = []
  }
}
