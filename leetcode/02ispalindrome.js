// function isPalindrome(num) {
//     let n = num;
//     let pal = 0;
//     while (n > 0) {
//         let rem = n % 10;
//         pal = pal * 10 + rem;
//         n = Math.floor((n / 10));
//     }

//     return pal == num;

// }

var isPalindrome = function (x) {
    let num = x.toString();
    // console.log(num.split(''));
    return (x == num.split('').reverse().join(''))
};
console.log(isPalindrome(121))