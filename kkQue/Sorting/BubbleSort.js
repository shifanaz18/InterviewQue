const BubbleSort = (arr) => {
  let isSwapped = false;
  for (let i = 0; i < arr.length; i++) {
    //for each step max item will come to the last respective index
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        isSwapped = !isSwapped;
      }
    }
    if (!isSwapped) {
      console.log("swap");
      break;
    }
  }
  return arr;
};

let ar = [3, 2, 1];

console.log(BubbleSort(ar));
