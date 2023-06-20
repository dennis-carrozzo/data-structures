# Min Heap Data Structure in JavaScript

This repository provides an implementation of the Min Heap data structure in JavaScript. A min heap is a complete binary tree that satisfies the heap property, which states that for any node in the tree, the value of the node is less than or equal to the values of its children.

## Features

- Get the minimum element in the heap.
- Insert an element into the heap.
- Remove the minimum element from the heap.
- Get the size of the heap.
- Check if the heap is empty.
- Convert the heap into an array.
- Clear the heap.

## Usage

1. Create a new instance of the MinHeap class:

   ```javascript
   const myMinHeap = new MinHeap()
   ```

2. Use the available methods to interact with the min heap:

   - Get the minimum element in the heap:

     ```javascript
     const min = myMinHeap.getMin()
     ```

   - Insert an element into the heap:

     ```javascript
     myMinHeap.insert(element)
     ```

   - Remove the minimum element from the heap:

     ```javascript
     const removedMin = myMinHeap.removeMin()
     ```

   - Get the size of the heap:

     ```javascript
     const heapSize = myMinHeap.size()
     ```

   - Check if the heap is empty:

     ```javascript
     const isEmpty = myMinHeap.isEmpty()
     ```

   - Convert the heap into an array:

     ```javascript
     const heapArray = myMinHeap.toArray()
     ```

   - Clear the heap:
     ```javascript
     myMinHeap.clear()
     ```