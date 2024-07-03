class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  Peek() {
    return this.heap.isEmpty ? null : this.heap[0];
  }
  HeapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] > this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }
  Delete() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap[0];
    } else {
      const deletevalue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.HeapifyDown();
      return deletevalue;
    }
  }
  insert(value) {
    this.heap.push(value);
    this.HeapifyUp();
  }
  HeapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let largerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largerChildIndex]
      ) {
        largerChildIndex = rightChildIndex;
      }
      if (this.heap[index] >= this.heap[largerChildIndex]) {
        break;
      }
      [this.heap[index], this.heap[largerChildIndex]] = [
        this.heap[largerChildIndex],
        this.heap[index],
      ];
      index = largerChildIndex;
    }
  }
}
function sort(array) {
  const h = new MaxHeap();
  for (let x of array) {
    h.insert(x);
  }
  for (let i = array.length - 1; i >= 0; i--) {
    array[i] = h.Delete();
  }
  return array;
}
const result = sort([4, 54, 67, 432, 4, 23, 34, 65, 22, 12]);
console.log(result);
