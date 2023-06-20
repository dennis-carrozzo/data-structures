# Array Data Structure in JavaScript

This repository provides an implementation of the Array data structure in JavaScript. The Array data structure is a fundamental data structure that allows you to store and manipulate a collection of elements in a contiguous memory block.

## Features

- Insert elements at the end of the array.
- Remove elements at a specific index.
- Access elements by index.
- Update elements at a specific index.
- Get the length of the array.
- Perform linear search to find the index of an element.
- Perform binary search (works only on sorted arrays).
- Sort the array using bubble sort, selection sort, or insertion sort algorithms.

## Usage

1. Create a new instance of the ArrayDS class:

   ```javascript
   const myArray = new ArrayDS()
   ```

2. Use the available methods to interact with the array:

   - Insert elements at the end of the array:

     ```javascript
     myArray.insert(element)
     ```

   - Remove elements at a specific index:

     ```javascript
     myArray.removeAt(index)
     ```

   - Access elements by index:

     ```javascript
     myArray.get(index)
     ```

   - Update elements at a specific index:

     ```javascript
     myArray.update(index, element)
     ```

   - Get the length of the array:

     ```javascript
     myArray.length()
     ```

   - Perform linear search to find the index of an element:

     ```javascript
     myArray.indexOf(element)
     ```

   - Perform binary search (works only on sorted arrays):

     ```javascript
     myArray.binarySearch(element)
     ```

   - Sort the array:
     ```javascript
     myArray.bubbleSort() // Bubble Sort
     myArray.selectionSort() // Selection Sort
     myArray.insertionSort() // Insertion Sort
     ```

