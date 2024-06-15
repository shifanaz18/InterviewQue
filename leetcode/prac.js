function removeDuplicate(arr) {
    let unqArr = [arr[0]];
    for (let i = 0; i < arr.length; i++) {
        if (!unqArr.includes(arr[i]))
            unqArr.push(arr[i])
        else
            continue;
    }
    return unqArr;
}

console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))