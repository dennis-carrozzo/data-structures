class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  // Insert a value into the BST
  // Time complexity: O(log n) on average, O(n) in the worst case (for an unbalanced tree)
  // Space complexity: O(log n) on average, O(n) in the worst case (for function call stack)
  insert (value) {
    const newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode
            break
          } else {
            currentNode = currentNode.left
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode
            break
          } else {
            currentNode = currentNode.right
          }
        }
      }
    }
  }

  // Search for a value in the BST
  // Time complexity: O(log n) on average, O(n) in the worst case (for an unbalanced tree)
  // Space complexity: O(1)
  search (value) {
    let currentNode = this.root
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return true
      } else if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false
  }

  // In-order traversal of the BST (ascending order)
  // Time complexity: O(n)
  // Space complexity: O(n) (for function call stack)
  inOrderTraversal () {
    const result = []
    function traverse (node) {
      if (node !== null) {
        traverse(node.left)
        result.push(node.value)
        traverse(node.right)
      }
    }
    traverse(this.root)
    return result
  }

  // Pre-order traversal of the BST (root -> left -> right)
  // Time complexity: O(n)
  // Space complexity: O(n) (for function call stack)
  preOrderTraversal () {
    const result = []
    function traverse (node) {
      if (node !== null) {
        result.push(node.value)
        traverse(node.left)
        traverse(node.right)
      }
    }
    traverse(this.root)
    return result
  }

  // Post-order traversal of the BST (left -> right -> root)
  // Time complexity: O(n)
  // Space complexity: O(n) (for function call stack)
  postOrderTraversal () {
    const result = []
    function traverse (node) {
      if (node !== null) {
        traverse(node.left)
        traverse(node.right)
        result.push(node.value)
      }
    }
    traverse(this.root)
    return result
  }

  // Level-order traversal of the BST
  // Time complexity: O(n)
  // Space complexity: O(n) (for the queue)
  levelOrderTraversal () {
    const result = []
    if (this.root === null) {
      return result
    }

    const queue = [this.root]
    while (queue.length > 0) {
      const node = queue.shift()
      result.push(node.value)

      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    }

    return result
  }
}
