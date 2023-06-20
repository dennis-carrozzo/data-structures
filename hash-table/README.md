# Hash Table (Dictionary) Data Structure in JavaScript

This repository provides an implementation of the Hash Table (or Dictionary) data structure in JavaScript. A Hash Table is a data structure that allows efficient insertion, deletion, and retrieval of key-value pairs. It achieves this by using a hash function to map keys to indices in an array-like structure.

## Features

- Insert key-value pairs into the hash table.
- Remove key-value pairs from the hash table.
- Retrieve the value associated with a key.
- Check if a key exists in the hash table.
- Get all the keys stored in the hash table.
- Get all the values stored in the hash table.

## Usage

1. Create a new instance of the HashTable class:

   ```javascript
   const myHashTable = new HashTable();
   ```

2. Use the available methods to interact with the hash table:

   - Insert a key-value pair:
     ```javascript
     myHashTable.insert(key, value);
     ```

   - Remove a key-value pair:
     ```javascript
     myHashTable.remove(key);
     ```

   - Get the value associated with a key:
     ```javascript
     const value = myHashTable.get(key);
     ```

   - Check if a key exists:
     ```javascript
     const exists = myHashTable.contains(key);
     ```

   - Get all the keys:
     ```javascript
     const keys = myHashTable.keys();
     ```

   - Get all the values:
     ```javascript
     const values = myHashTable.values();
     ```
