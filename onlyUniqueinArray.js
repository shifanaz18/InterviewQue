// let arr = [1,1, 2, 3, 3, 4, 5, 6, 2, 2, 7, 7]

//[1,2,3]

// const findun = (arr) => {
//     let obj = [];

//     for (let i = 0; i < arr.length; i++) {
//         let found = false;
//         for (let j = 0; j < arr.length; j++) {

//             if (i == j) continue;
//             if (arr[i] == arr[j]) {
//                 found = true;
//             }
//         }
//         if (!found) {
//             obj.push(arr[i])
//         }

//     }
//     return obj;

// }


const findunq = (arr) => {
    let obj = {}
    let newArr = [];
    //obj[arr[0]]=arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        }
        else
            obj[arr[i]] = 1

    }
    for (const key in obj) {
        if (obj[key] == 1)
            newArr.push(key)
    }
    return newArr;
}












console.log(findunq([1, 1, 3, 3, 4, 5, 6, 2, 2, 7, 7]));
// console.log(findunq([1, 1, 3, 8, 8]));