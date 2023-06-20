# JavaScript Data Structures - Binary Search Tree

This repository contains an implementation of a Binary Search Tree (BST) in JavaScript. A BST is a tree-based data structure that allows for efficient searching, insertion, and deletion operations.

## Overview

A Binary Search Tree (BST) is a binary tree data structure in which each node has at most two children: a left child and a right child. The BST property states that the value of each node in the left subtree is less than the value of the node, and the value of each node in the right subtree is greater than the value of the node. This property enables efficient searching and other operations.

This implementation provides the following features:

- Insertion of values into the tree
- Searching for a value in the tree
- In-order, pre-order, post-order, and level-order traversals of the tree

## Usage

To use the Binary Search Tree implementation, follow these steps:

3. Use the Binary Search Tree in your JavaScript code:

   ```javascript
   // Create a new instance of BinarySearchTree
   const bst = new BinarySearchTree()

   // Insert values into the tree
   bst.insert(5)
   bst.insert(3)
   bst.insert(7)
   bst.insert(1)

   // Search for a value in the tree
   const found = bst.search(7)
   console.log(found) // Output: true

   // Perform a level-order traversal
   const levelOrder = bst.levelOrderTraversal()
   console.log(levelOrder) // Output: [5, 3, 7, 1]
   ```

## API Reference

### `insert(value)`

Inserts a value into the Binary Search Tree.

- Time complexity: O(log n) on average, O(n) in the worst case (for an unbalanced tree)
- Space complexity: O(log n) on average, O(n) in the worst case (for function call stack)

### `search(value)`

Searches for a value in the Binary Search Tree.

- Time complexity: O(log n) on average, O(n) in the worst case (for an unbalanced tree)
- Space complexity: O(1)

### `inOrderTraversal()`

Performs an in-order traversal of the Binary Search Tree, which returns the nodes in ascending order.

- Time complexity: O(n)
- Space complexity: O(n) (for function call stack)

### `preOrderTraversal()`

Performs a pre-order traversal of the Binary Search Tree, which visits the root node first, followed by the left subtree and then the right subtree.

- Time complexity: O(n)
- Space complexity: O(n) (for function call stack)

### `postOrderTraversal()`

Performs a post-order traversal of the Binary Search Tree, which visits the left subtree first, followed by the right subtree and then the root node.

- Time complexity: O(n)
- Space complexity: O(n) (for function call stack)

### `levelOrderTraversal()`

Performs a level-order traversal of the Binary Search Tree, which visits the nodes level by level from left to right.

- Time complexity: O(n)
- Space complexity: O(n) (for the queue)
