const find = (arr, target) => {
  let index = 0;
  let list = [];
  return findMultiIndex(arr, target, 0, list);
};

const isFind = (arr, target, ind) => {
  //   console.log(arr, target, ind);
  if (ind == arr.length) {
    return false;
  }
  return arr[ind] === target || isFind(arr, target, ind + 1);
};

const findIndex = (arr, target, ind) => {
  //   console.log(arr, target, ind);
  if (ind == arr.length) {
    return -1;
  }
  if (arr[ind] == target) {
    return ind;
  }
  return findIndex(arr, target, ind + 1);
};

const findMultiIndex = (arr, target, ind, list) => {
  //   console.log(arr, target, ind);

  if (ind == arr.length) {
    return list;
  }
  if (arr[ind] == target) {
    list.push(ind);
  }
  return findMultiIndex(arr, target, ind + 1, list);
};

console.log(find([12, 44, 44, 34, 67], 404));
