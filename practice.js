function findDuplicate(arr) {
    let obj = {};
    let dupArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        }
        else
            obj[arr[i]] = 1;
    }
    for (const key in obj) {
        if (obj[key] > 1) {
            dupArr.push(key)

        }
    }
    return dupArr;
}

console.log(findDuplicate([1, 2, 3, 2, 4, 4, 4]))