const searchIn2DArr = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) return { row: i, col: j };
    }
  }
  return null;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const target = 1;
console.log(searchIn2DArr(matrix, target));
