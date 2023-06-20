class HashTable {
  constructor () {
    this.table = {}
  }

  // Hash function to convert keys into numerical indices
  hash (key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37 // Modulo operation to limit the index within the table size
  }

  // Insert a key-value pair into the hash table
  // Time complexity: O(1) (average case), O(n) (worst case if collision resolution is not handled)
  // Space complexity: O(1)
  insert (key, value) {
    const index = this.hash(key)
    if (!this.table[index]) {
      this.table[index] = {}
    }
    this.table[index][key] = value
  }

  // Remove a key-value pair from the hash table based on the key
  // Time complexity: O(1) (average case), O(n) (worst case if collision resolution is not handled)
  // Space complexity: O(1)
  remove (key) {
    const index = this.hash(key)
    if (this.table[index] && this.table[index][key]) {
      delete this.table[index][key]
    }
  }

  // Get the value associated with a key from the hash table
  // Time complexity: O(1) (average case), O(n) (worst case if collision resolution is not handled)
  // Space complexity: O(1)
  get (key) {
    const index = this.hash(key)
    if (this.table[index] && this.table[index][key]) {
      return this.table[index][key]
    }
    return undefined
  }

  // Check if a key exists in the hash table
  // Time complexity: O(1) (average case), O(n) (worst case if collision resolution is not handled)
  // Space complexity: O(1)
  contains (key) {
    const index = this.hash(key)
    return !!(this.table[index] && this.table[index][key])
  }

  // Get all the keys stored in the hash table
  // Time complexity: O(n)
  // Space complexity: O(n)
  keys () {
    const keysArray = []
    for (const index in this.table) {
      for (const key in this.table[index]) {
        keysArray.push(key)
      }
    }
    return keysArray
  }

  // Get all the values stored in the hash table
  // Time complexity: O(n)
  // Space complexity: O(n)
  values () {
    const valuesArray = []
    for (const index in this.table) {
      for (const key in this.table[index]) {
        valuesArray.push(this.table[index][key])
      }
    }
    return valuesArray
  }
}
