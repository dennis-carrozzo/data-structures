# Queue Data Structure in JavaScript

This repository provides an implementation of the Queue data structure in JavaScript. A queue is an abstract data type that follows the First-In-First-Out (FIFO) principle. It allows efficient insertion at one end (enqueue) and removal from the other end (dequeue).

## Features

- Enqueue an element into the queue.
- Dequeue the front element from the queue.
- Get the front element of the queue without removing it.
- Check if the queue is empty.
- Get the size of the queue.
- Clear the queue.

## Usage

1. Create a new instance of the Queue class:

   ```javascript
   const myQueue = new Queue()
   ```

2. Use the available methods to interact with the queue:

   - Enqueue an element into the queue:

     ```javascript
     myQueue.enqueue(element)
     ```

   - Dequeue the front element from the queue:

     ```javascript
     const dequeuedElement = myQueue.dequeue()
     ```

   - Get the front element of the queue without removing it:

     ```javascript
     const frontElement = myQueue.front()
     ```

   - Check if the queue is empty:

     ```javascript
     const isEmpty = myQueue.isEmpty()
     ```

   - Get the size of the queue:

     ```javascript
     const queueSize = myQueue.size()
     ```

   - Clear the queue:
     ```javascript
     myQueue.clear()
     ```
