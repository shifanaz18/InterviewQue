Array.prototype.myIncludes = function (val) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == val)
            return true
    }
    return false;
}


function findunique(arr) {
    let unarr = [arr[0]]
    for (let i = 0; i < arr.length; i++) {
        if (!unarr.myIncludes(arr[i])) {
            unarr.push(arr[i])
        }
        else
            continue;

    }

    return unarr;
}


console.log(findunique(['a', 'b', 'c', 'a', 'r', 'b', 'w', 'p']))