# Heap Data Structure in JavaScript

This repository provides an implementation of the Heap data structure in JavaScript. A heap is a complete binary tree that satisfies the heap property, which states that for any node in the tree, the value of the node is greater than or equal to the values of its children (for a max heap).

## Features

- Get the maximum element in the heap.
- Insert an element into the heap.
- Remove the maximum element from the heap.
- Get the size of the heap.
- Check if the heap is empty.
- Convert the heap into an array.
- Clear the heap.

## Usage

1. Create a new instance of the Heap class:

   ```javascript
   const myHeap = new Heap()
   ```

2. Use the available methods to interact with the heap:

   - Get the maximum element in the heap:

     ```javascript
     const max = myHeap.getMax()
     ```

   - Insert an element into the heap:

     ```javascript
     myHeap.insert(element)
     ```

   - Remove the maximum element from the heap:

     ```javascript
     const removedMax = myHeap.removeMax()
     ```

   - Get the size of the heap:

     ```javascript
     const heapSize = myHeap.size()
     ```

   - Check if the heap is empty:

     ```javascript
     const isEmpty = myHeap.isEmpty()
     ```

   - Convert the heap into an array:

     ```javascript
     const heapArray = myHeap.toArray()
     ```

   - Clear the heap:
     ```javascript
     myHeap.clear()
     ```