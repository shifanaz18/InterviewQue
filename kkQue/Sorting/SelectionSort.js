// const SelectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     //find the max item in the remaining array and swap with correct index.
//     let last = arr.length - 1 - i;
//     let maxIndex = getMaxIndex(arr, last);
//     swap(arr, maxIndex, last);
//   }
//   return arr;
// };

// const getMaxIndex = (arr, last) => {
//   let max = 0;
//   for (let i = 1; i <= last; i++) {
//     if (arr[max] < arr[i]) {
//       max = i;
//     }
//   }
//   return max;
// };

// const swap = (arr, maxIndex, last) => {
//   let temp = arr[maxIndex];
//   arr[maxIndex] = arr[last];
//   arr[last] = temp;
// };
// let ar = [1, 2, 13, -9];

// console.log(SelectionSort(ar));

const findMax = (arr, start, end) => {
  let max = start;
  for (let i = 0; i <= end; i++) {
    if (arr[max] < arr[i]) max = i;
  }
  return max;
};

const swapArr = (arr, max, last) => {
  let temp = arr[last];
  arr[last] = arr[max];
  arr[max] = temp;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - 1 - i;
    const max = findMax(arr, 0, last);
    console.log(max, i, last);
    swapArr(arr, max, last);
  }
  return arr;
};

console.log(selectionSort([3, 2, 1]));
