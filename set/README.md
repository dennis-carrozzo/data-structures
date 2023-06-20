# Set Data Structure in JavaScript

This repository provides an implementation of the Set data structure in JavaScript. A set is an abstract data type that stores unique values in no particular order.

## Features

- Add an element to the set.
- Remove an element from the set.
- Check if an element exists in the set.
- Get the size of the set.
- Get all the values in the set.
- Clear the set.

## Usage

1. Create a new instance of the Set class:

   ```javascript
   const mySet = new Set()
   ```

2. Use the available methods to interact with the set:

   - Add an element to the set:

     ```javascript
     mySet.add(element)
     ```

   - Remove an element from the set:

     ```javascript
     mySet.delete(element)
     ```

   - Check if an element exists in the set:

     ```javascript
     const exists = mySet.has(element)
     ```

   - Get the size of the set:

     ```javascript
     const setSize = mySet.size()
     ```

   - Get all the values in the set:

     ```javascript
     const values = mySet.values()
     ```

   - Clear the set:
     ```javascript
     mySet.clear()
     ```