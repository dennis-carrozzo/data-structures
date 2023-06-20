class ArrayDS {
  constructor() {
    this.array = [];
  }

  // Insert an element at the end of the array
  // Time complexity: O(1)
  // Space complexity: O(1)
  insert(element) {
    this.array.push(element);
  }

  // Remove the element at the given index
  // Time complexity: O(n)
  // Space complexity: O(1)
  removeAt(index) {
    if (index >= 0 && index < this.array.length) {
      return this.array.splice(index, 1)[0];
    }
    return undefined;
  }

  // Get the element at the given index
  // Time complexity: O(1)
  // Space complexity: O(1)
  get(index) {
    if (index >= 0 && index < this.array.length) {
      return this.array[index];
    }
    return undefined;
  }

  // Update the element at the given index
  // Time complexity: O(1)
  // Space complexity: O(1)
  update(index, element) {
    if (index >= 0 && index < this.array.length) {
      this.array[index] = element;
      return true;
    }
    return false;
  }

  // Get the length of the array
  // Time complexity: O(1)
  // Space complexity: O(1)
  length() {
    return this.array.length;
  }

  // Linear search for the given element
  // Time complexity: O(n)
  // Space complexity: O(1)
  indexOf(element) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === element) {
        return i;
      }
    }
    return -1;
  }

  // Binary search for the given element (works only on sorted arrays)
  // Time complexity: O(log n)
  // Space complexity: O(1)
  binarySearch(element) {
    let low = 0;
    let high = this.array.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const guess = this.array[mid];

      if (guess === element) {
        return mid;
      }

      if (guess > element) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
  }

  // Bubble sort (ascending order)
  // Time complexity: O(n^2)
  // Space complexity: O(1)
  bubbleSort() {
    const length = this.array.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          // Swap elements
          const temp = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = temp;
        }
      }
    }
  }

  // Selection sort (ascending order)
  // Time complexity: O(n^2)
  // Space complexity: O(1)
  selectionSort() {
    const length = this.array.length;

    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < length; j++) {
        if (this.array[j] < this.array[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        // Swap elements
        const temp = this.array[i];
        this.array[i] = this.array[minIndex];
        this.array[minIndex] = temp;
      }
    }
  }

  // Insertion sort (ascending order)
  // Time complexity: O(n^2)
  // Space complexity: O(1)
  insertionSort() {
    const length = this.array.length;

    for (let i = 1; i < length; i++) {
      const key = this.array[i];
      let j = i - 1;

      while (j >= 0 && this.array[j] > key) {
        this.array[j + 1] = this.array[j];
        j--;
      }

      this.array[j + 1] = key;
    }
  }
}
