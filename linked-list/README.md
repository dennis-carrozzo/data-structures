# Singly Linked List Data Structure in JavaScript

This repository provides an implementation of the Singly Linked List data structure in JavaScript. A linked list is a linear data structure consisting of nodes, where each node contains a value and a reference to the next node in the sequence.

## Features

- Append a node at the end of the linked list.
- Prepend a node at the beginning of the linked list.
- Insert a node at a specific position in the linked list.
- Remove a node from a specific position in the linked list.
- Get the value at a specific position in the linked list.
- Update the value at a specific position in the linked list.
- Check if the linked list is empty.
- Get the size of the linked list.
- Convert the linked list into an array.
- Clear the linked list.

## Usage

1. Create a new instance of the LinkedList class:

   ```javascript
   const myList = new LinkedList()
   ```

2. Use the available methods to interact with the linked list:

   - Append a node at the end of the linked list:

     ```javascript
     myList.append(value)
     ```

   - Prepend a node at the beginning of the linked list:

     ```javascript
     myList.prepend(value)
     ```

   - Insert a node at a specific position in the linked list:

     ```javascript
     myList.insert(index, value)
     ```

   - Remove a node from a specific position in the linked list:

     ```javascript
     myList.remove(index)
     ```

   - Get the value at a specific position in the linked list:

     ```javascript
     const value = myList.get(index)
     ```

   - Update the value at a specific position in the linked list:

     ```javascript
     myList.update(index, value)
     ```

   - Check if the linked list is empty:

     ```javascript
     const isEmpty = myList.isEmpty()
     ```

   - Get the size of the linked list:

     ```javascript
     const listSize = myList.size()
     ```

   - Convert the linked list into an array:

     ```javascript
     const array = myList.toArray()
     ```

   - Clear the linked list:
     ```javascript
     myList.clear()
     ```