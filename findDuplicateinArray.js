let arr = ['a', 'b', 'c', 'a', 'r', 'b', 'w', 'p'];
// let arru = [];
// for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             count++;
//         }

//     }
//     if (count > 1) {
//         if (!arru.includes(arr[i]))
//             arru.push(arr[i])
//     }
//     console.log(count, arru)
// }


let obj = {};
for (let i = 0; i < arr.length; i++) {

    if (obj[arr[i]])
        obj[arr[i]] += 1
    else
        obj[arr[i]] = 1

}
let arr2 = [];
for (const key in obj) {
    if (obj[key] > 1) {
        arr2.push(key)
    }
}

console.log("dup", arr2)
// console.log("duplicate", arru)