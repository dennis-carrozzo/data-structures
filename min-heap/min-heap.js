class MinHeap {
  constructor () {
    this.heap = []
  }

  // Get the parent index of a given index
  getParentIndex (index) {
    return Math.floor((index - 1) / 2)
  }

  // Get the left child index of a given index
  getLeftChildIndex (index) {
    return 2 * index + 1
  }

  // Get the right child index of a given index
  getRightChildIndex (index) {
    return 2 * index + 2
  }

  // Swap two elements in the heap
  swap (index1, index2) {
    ;[this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1]
    ]
  }

  // Heapify up - maintain the heap property from a given index upwards
  heapifyUp (index) {
    const parentIndex = this.getParentIndex(index)
    if (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.heapifyUp(parentIndex)
    }
  }

  // Heapify down - maintain the heap property from a given index downwards
  heapifyDown (index) {
    const leftChildIndex = this.getLeftChildIndex(index)
    const rightChildIndex = this.getRightChildIndex(index)
    let smallestIndex = index

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex
    }

    if (smallestIndex !== index) {
      this.swap(index, smallestIndex)
      this.heapifyDown(smallestIndex)
    }
  }

  // Get the minimum element in the heap
  // Time complexity: O(1)
  // Space complexity: O(1)
  getMin () {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty')
    }
    return this.heap[0]
  }

  // Insert an element into the heap
  // Time complexity: O(log n)
  // Space complexity: O(1)
  insert (value) {
    this.heap.push(value)
    this.heapifyUp(this.heap.length - 1)
  }

  // Remove the minimum element from the heap
  // Time complexity: O(log n)
  // Space complexity: O(1)
  removeMin () {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty')
    }

    const min = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    this.heapifyDown(0)

    return min
  }

  // Get the size of the heap
  // Time complexity: O(1)
  // Space complexity: O(1)
  size () {
    return this.heap.length
  }

  // Check if the heap is empty
  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty () {
    return this.heap.length === 0
  }

  // Convert the heap into an array
  // Time complexity: O(1)
  // Space complexity: O(1)
  toArray () {
    return [...this.heap]
  }

  // Clear the heap
  // Time complexity: O(1)
  // Space complexity: O(1)
  clear () {
    this.heap = []
  }
}
