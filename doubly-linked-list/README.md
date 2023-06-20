# Doubly Linked List Data Structure in JavaScript

This repository provides an implementation of the Doubly Linked List data structure in JavaScript. A doubly linked list is a linear data structure that consists of a sequence of nodes, where each node contains a value and maintains references to both the previous and next nodes in the sequence.

## Features

- Append a node at the end of the doubly linked list.
- Prepend a node at the beginning of the doubly linked list.
- Insert a node at a specific position in the doubly linked list.
- Remove a node from a specific position in the doubly linked list.
- Get the value at a specific position in the doubly linked list.
- Update the value at a specific position in the doubly linked list.
- Check if the doubly linked list is empty.
- Get the size of the doubly linked list.
- Convert the doubly linked list into an array.
- Clear the doubly linked list.

## Usage

1. Create a new instance of the DoublyLinkedList class:

   ```javascript
   const myList = new DoublyLinkedList()
   ```

2. Use the available methods to interact with the doubly linked list:

   - Append a node at the end of the doubly linked list:

     ```javascript
     myList.append(value)
     ```

   - Prepend a node at the beginning of the doubly linked list:

     ```javascript
     myList.prepend(value)
     ```

   - Insert a node at a specific position in the doubly linked list:

     ```javascript
     myList.insert(index, value)
     ```

   - Remove a node from a specific position in the doubly linked list:

     ```javascript
     myList.remove(index)
     ```

   - Get the value at a specific position in the doubly linked list:

     ```javascript
     const value = myList.get(index)
     ```

   - Update the value at a specific position in the doubly linked list:

     ```javascript
     myList.update(index, value)
     ```

   - Check if the doubly linked list is empty:

     ```javascript
     const isEmpty = myList.isEmpty()
     ```

   - Get the size of the doubly linked list:

     ```javascript
     const listSize = myList.size()
     ```

   - Convert the doubly linked list into an array:

     ```javascript
     const array = myList.toArray()
     ```

   - Clear the doubly linked list:
     ```javascript
     myList.clear()
     ```
