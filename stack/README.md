# Stack Data Structure in JavaScript

This repository provides an implementation of the Stack data structure in JavaScript. A stack is an abstract data type that follows the Last-In-First-Out (LIFO) principle. It allows efficient insertion and removal of elements from one end, known as the top of the stack.

## Features

- Push elements onto the stack.
- Pop the top element from the stack.
- Peek at the top element without removing it.
- Check if the stack is empty.
- Get the size of the stack.
- Clear the stack.

## Usage

1. Create a new instance of the Stack class:

   ```javascript
   const myStack = new Stack();
   ```

2. Use the available methods to interact with the stack:

   - Push an element onto the stack:
     ```javascript
     myStack.push(element);
     ```

   - Pop the top element from the stack:
     ```javascript
     const poppedElement = myStack.pop();
     ```

   - Peek at the top element without removing it:
     ```javascript
     const topElement = myStack.peek();
     ```

   - Check if the stack is empty:
     ```javascript
     const isEmpty = myStack.isEmpty();
     ```

   - Get the size of the stack:
     ```javascript
     const stackSize = myStack.size();
     ```

   - Clear the stack:
     ```javascript
     myStack.clear();
     ```