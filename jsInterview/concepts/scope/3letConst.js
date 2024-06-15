// let and const are hoisted as var but they are in temporal deadzone
// console.log(b);
// console.log(a);//refrence error of temporal deadzone  like you cannot access values when they are in TDZ
// console.log(x)//refererence error occur when js engine unable to find value in the scope

let a = 10;
// console.log(window.a);
var b = 100; //global or window object attach to var variable
// console.log(this.b);
//temporal deadzon is time since when the variable hoisted till it is initialized the value.

// and we cannot redeclare the let key word
// let a = 1000; var a = 100;-syntax error
var b = 1000;

//const behaves same as let only diff is we have to declare and assign value to const at the same time
// const d = 909;
// d = 2000;-Type error
// const d-syntax error

//to avoid temporal deadzone you push all the initialization and declaration on the top of the code
