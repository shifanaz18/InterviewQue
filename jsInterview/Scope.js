/*
var has global scope
let and const have block scope
 */

//1
// {
//   var a = 10;
// }

// console.log(a);

//2
// {
//   const a = 10;
//   let b = 30;
//   var c = 100;
// }

// console.log(c, a, b);

//3
// function test() {
//   let a = 11; //I can put here var too.but i cant change let to var is called illegal shadowing and will give error as variable already defined.
//   if (true) {
//     let a = 44; //This is called variable shadowing.
//     console.log(a);
//   }
//   console.log(a);
// }

// test();

//4
//var can redeclare in same scope but const and let cannot declared in same scope it will give error as already declared
// var a = 10;
// var a = 130;

// let a = 10;
// let a = 130;

// let a = 10;
// {
//   //This wont give error called shadowing.
//   let a = 30;
// }

//5
// we cant declare const without initialization .
// const a;

//6
//we cant reinitialize const

// var a = 10;
// a = 100;

// let b = 80;
// b = 800;

// const c = 90;
// c = 900;

//7 HOISTING
//During the creation phase js engine moves variable and function declaration on the top of your code.this is known as hoisting

// console.log(count);
// var count = 10;

// console.log(count);
// let count = 10;
// in caseof let it atleast inform us about it cant access count before initialization

//temporal dead zone is time between let and const declartion and initilization

// console.log(count);
// let count = 10;
// var count2 = 900;

function test() {
  console.log(a, b, c);

  let a = 1;
  const b = 2;
  var c = 3;

  //var is hoisted and let and const variable are too hoisted but in temporal dead zone
  //   temporal dead zone is a state where variable are in scope but not yet declared
}

test();
