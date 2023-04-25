/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            stack.push(s[i]);
        }
        else {
            let popVal = stack.pop();
            console.log(popVal)
            if (obj[popVal] != s[i])
                return false;
        }

    }
    return stack.length == 0;
};


console.log(isValid("([]{}"));