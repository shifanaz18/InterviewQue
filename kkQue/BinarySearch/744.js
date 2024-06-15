const nextGreatestLetter = (letters, target) => {
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return letters[start % letters.length];
};

console.log(nextGreatestLetter(["c", "f", "j"], "c"));
