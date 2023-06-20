/**
 * Class representing a Graph.
 * @class
 */
class Graph {
  /**
   * Create a Graph.
   * @constructor
   */
  constructor () {
    this.vertices = new Map()
  }

  /**
   * Add a vertex to the graph.
   * @param {string} vertex - The vertex to add.
   */
  addVertex (vertex) {
    // Time complexity: O(1)
    // Space complexity: O(1)
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, new Set())
    }
  }

  /**
   * Remove a vertex from the graph.
   * @param {string} vertex - The vertex to remove.
   */
  removeVertex (vertex) {
    // Time complexity: O(V + E)
    // Space complexity: O(1)
    if (this.vertices.has(vertex)) {
      this.vertices.delete(vertex)
      this.vertices.forEach(neighbors => {
        neighbors.delete(vertex)
      })
    }
  }

  /**
   * Add an edge between two vertices in the graph.
   * @param {string} vertex1 - The first vertex.
   * @param {string} vertex2 - The second vertex.
   */
  addEdge (vertex1, vertex2) {
    // Time complexity: O(1)
    // Space complexity: O(1)
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      this.vertices.get(vertex1).add(vertex2)
      this.vertices.get(vertex2).add(vertex1)
    }
  }

  /**
   * Remove an edge between two vertices in the graph.
   * @param {string} vertex1 - The first vertex.
   * @param {string} vertex2 - The second vertex.
   */
  removeEdge (vertex1, vertex2) {
    // Time complexity: O(1)
    // Space complexity: O(1)
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      this.vertices.get(vertex1).delete(vertex2)
      this.vertices.get(vertex2).delete(vertex1)
    }
  }

  /**
   * Get the neighbors of a vertex in the graph.
   * @param {string} vertex - The vertex.
   * @returns {Set} - The set of neighboring vertices.
   */
  getNeighbors (vertex) {
    // Time complexity: O(1)
    // Space complexity: O(1)
    if (this.vertices.has(vertex)) {
      return this.vertices.get(vertex)
    }
    return null
  }

  /**
   * Get all the vertices in the graph.
   * @returns {Set} - The set of vertices in the graph.
   */
  getVertices () {
    // Time complexity: O(1)
    // Space complexity: O(1)
    return this.vertices.keys()
  }

  /**
   * Get the size (number of vertices) of the graph.
   * @returns {number} - The number of vertices in the graph.
   */
  size () {
    // Time complexity: O(1)
    // Space complexity: O(1)
    return this.vertices.size
  }

  /**
   * Perform a depth-first search traversal of the graph.
   * @param {string} startVertex - The starting vertex for the traversal.
   * @returns {Array} - The order in which the vertices were visited.
   */
  depthFirstTraversal (startVertex) {
    // Time complexity: O(V + E)
    // Space complexity: O(V)
    const visited = new Set()
    const result = []

    const traverse = vertex => {
      visited.add(vertex)
      result.push(vertex)

      const neighbors = this.vertices.get(vertex)
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          traverse(neighbor)
        }
      }
    }

    traverse(startVertex)
    return result
  }

  /**
   * Perform a breadth-first search traversal of the graph.
   * @param {string} startVertex - The starting vertex for the traversal.
   * @returns {Array} - The order in which the vertices were visited.
   */
  breadthFirstTraversal (startVertex) {
    // Time complexity: O(V + E)
    // Space complexity: O(V)
    const visited = new Set()
    const queue = [startVertex]
    const result = []

    visited.add(startVertex)

    while (queue.length > 0) {
      const currentVertex = queue.shift()
      result.push(currentVertex)

      const neighbors = this.vertices.get(currentVertex)
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
        }
      }
    }

    return result
  }
}

module.exports = Graph
