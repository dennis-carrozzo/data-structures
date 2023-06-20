# JavaScript Data Structures - Graph

This repository contains an implementation of a Graph data structure in JavaScript. A graph is a non-linear data structure consisting of vertices (nodes) and edges (connections) between those vertices.

## Overview

A Graph is a versatile data structure that models relationships between objects. It is composed of a set of vertices and a set of edges, where each edge connects a pair of vertices. Graphs can be either directed (edges have a specific direction) or undirected (edges have no direction).

This implementation provides the following features:

- Adding and removing vertices and edges
- Retrieving the neighbors of a vertex
- Performing depth-first and breadth-first traversals

## Usage

1. Use the Graph in your JavaScript code:

   ```javascript
   // Create a new instance of Graph
   const graph = new Graph()

   // Add vertices to the graph
   graph.addVertex('A')
   graph.addVertex('B')
   graph.addVertex('C')
   graph.addVertex('D')

   // Add edges between vertices
   graph.addEdge('A', 'B')
   graph.addEdge('B', 'C')
   graph.addEdge('C', 'D')
   graph.addEdge('D', 'A')

   // Get the neighbors of a vertex
   const neighbors = graph.getNeighbors('A')
   console.log(neighbors) // Output: Set { 'B', 'D' }

   // Perform a depth-first traversal
   const dfsTraversal = graph.depthFirstTraversal('A')
   console.log(dfsTraversal) // Output: [ 'A', 'B', 'C', 'D' ]

   // Perform a breadth-first traversal
   const bfsTraversal = graph.breadthFirstTraversal('A')
   console.log(bfsTraversal) // Output: [ 'A', 'B', 'D', 'C' ]
   ```

## API Reference

### `addVertex(vertex)`

Adds a vertex to the graph.

- Time complexity: O(1)
- Space complexity: O(1)

### `removeVertex(vertex)`

Removes a vertex from the graph.

- Time complexity: O(V + E)
- Space complexity: O(1)

### `addEdge(vertex1, vertex2)`

Adds an edge between two vertices in the graph.

- Time complexity: O(1)
- Space complexity: O(1)

### `removeEdge(vertex1, vertex2)`

Removes an edge between two vertices in the graph.

- Time complexity: O(1)
- Space complexity: O(1)

### `getNeighbors(vertex)`

Returns the neighbors of a vertex in the graph.

- Time complexity: O(1)
- Space complexity: O(1)

### `getVertices()`

Returns all the vertices in the graph.

- Time complexity: O(1)
- Space complexity: O(1)

### `size()`

Returns the number of vertices in the graph.

- Time complexity: O(1)
- Space complexity: O(1)

### `depthFirstTraversal(startVertex)`

Performs a depth-first search traversal of the graph, starting from the given vertex.

- Time complexity: O(V + E)
- Space complexity: O(V)

### `breadthFirstTraversal(startVertex)`

Performs a breadth-first search traversal of

the graph, starting from the given vertex.

- Time complexity: O(V + E)
- Space complexity: O(V)
