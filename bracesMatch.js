function match(str) {
    // let open = ['(', '{', '[', '<'];
    let obj = {
        '{': '}',
        '<': '>',
        '(': ')',
        '[': ']'
    }
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            // console.log('open', str[i])
            stack.push(str[i])
        } else {
            console.log('close', str[i])
            const p = stack.pop();
            if (obj[p] != str[i])
                return false;
        }

    }
    // if (stack.length == 0)
    //     return true
    // else
    //     return false

    return stack.length == 0
}


console.log(match('[[['));