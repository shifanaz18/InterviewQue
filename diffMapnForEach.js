let arr = [1, 2, 3]
//array doesnt modify original array it returns new array
const newArr = arr.map((e, i) => {
    return e * i;
})

console.log(newArr);
//for each does the same but doesnt return new array
const newArr2 = [];
arr.forEach((e, i) => {
    newArr2[i] = e * i;
})


console.log(newArr2);