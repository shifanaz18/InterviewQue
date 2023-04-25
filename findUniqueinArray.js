let arr = ['a', 'b', 'c', 'a', 'r', 'b', 'w', 'p'];
// let obj={};
// // for (let i = 0; i < arr.length; i++) {
// //     obj[arr[i]]=1
// // }

// // console.log(Object.keys(obj));

// var set = new Set(arr);
// console.log([...set]);

let arru = [arr[0]];
for (let i = 1; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < arru.length; j++) {
        if (arr[i] == arru[j]) {
            found = true;
        }
    }
    if (!found)
        arru.push(arr[i]);
}

for (let i = 1; i < arr.length; i++) {
    if (!arru.includes(arr[i])) {
        arru.push(arr[i]);
    }
}

console.log("out", arru)


Array.prototype.myincludes = function (val) {
    // console.log(this)

    for (let j = 0; j < this.length; j++) {
        if (this[j] == val)
            return true;

    }
    return false;
}


const findunique = (arr) => {
    let unArr = [arr[0]];

    for (let i = 0; i < arr.length; i++) {

        // if (!myincludes(unArr, arr[i]))
        //     unArr.push(arr[i])
        if (!unArr.myincludes(arr[i]))
            unArr.push(arr[i])
    }
    return unArr;
}
