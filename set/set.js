class Set {
  constructor () {
    this.set = {}
  }

  // Add an element to the set
  // Time complexity: O(1)
  // Space complexity: O(1)
  add (element) {
    this.set[element] = true
  }

  // Remove an element from the set
  // Time complexity: O(1)
  // Space complexity: O(1)
  delete (element) {
    delete this.set[element]
  }

  // Check if an element exists in the set
  // Time complexity: O(1)
  // Space complexity: O(1)
  has (element) {
    return this.set.hasOwnProperty(element)
  }

  // Get the size of the set
  // Time complexity: O(1)
  // Space complexity: O(1)
  size () {
    return Object.keys(this.set).length
  }

  // Get all the values in the set
  // Time complexity: O(n)
  // Space complexity: O(n)
  values () {
    return Object.keys(this.set)
  }

  // Clear the set
  // Time complexity: O(1)
  // Space complexity: O(1)
  clear () {
    this.set = {}
  }
}
