class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor () {
    this.root = null
  }

  // Insert a value into the binary tree
  // Time complexity: O(log n) on average, O(n) in the worst case (for an unbalanced tree)
  // Space complexity: O(1)
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

  // Search for a value in the binary tree
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

  // Traverse the binary tree in pre-order (node -> left -> right)
  // Time complexity: O(n)
  // Space complexity: O(n)
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

  // Traverse the binary tree in in-order (left -> node -> right)
  // Time complexity: O(n)
  // Space complexity: O(n)
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

  // Traverse the binary tree in post-order (left -> right -> node)
  // Time complexity: O(n)
  // Space complexity: O(n)
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

  // Traverse the binary tree in level-order
  // Time complexity: O(n)
  // Space complexity: O(n)
  levelOrderTraversal () {
    if (this.root === null) {
      return []
    }

    const result = []
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
