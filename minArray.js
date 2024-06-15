const arrayMin = (arr) => {

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i]

    }
    return min;
}

console.log(arrayMin([10, 4, 9, 2, 40, 50]));


