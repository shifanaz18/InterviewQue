//map
//findsqaure of array

let arr = [1, 2, 3, 4]
const newarr = arr.map((e) => {
    return e * e
})

console.log(newarr);

//filter
//find odd of an array.

const newarr2 = arr.filter((x) => x % 2)

console.log(newarr2);

//reduce
//find the total of an array

const newarr3 = arr.reduce((acc, curr) => {
    return acc = acc + curr
}, 0)

console.log(newarr3);
//find the max of arr
const newArr4 = arr.reduce((acc, curr) => {
    if (acc < curr)
        acc = curr;
    return acc;
}, 0)

console.log(newArr4);
////////////////////////////////////////
// when u have an array and neeed to iterate over array and come woth single output basically there we can use reduce 
const users = [{ firstNmae: "Shifa", lastName: "Ali", age: 26 },
{ firstNmae: "Ahmed", lastName: "Anwar", age: 31 },
{ firstNmae: "Faizan", lastName: "Ali", age: 27 },
{ firstNmae: "Madiha", lastName: "Ayesha", age: 26 }]

//{26:2,31:1,27:1}
const userArr = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(userArr
)

///filter-show firstname of people whose age is greater than 30

const ageUser = users.filter((x) => {
    return x.age > 30
}
).map(x => x.firstNmae)

// console.log(ageUser)

const age = users.reduce((acc, curr) => {
    if (curr.age > 30) {
        acc.push(curr.firstNmae)
    }
    return acc;
}, [])

console.log(age);


