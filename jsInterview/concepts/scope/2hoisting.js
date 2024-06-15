// getName();
// console.log(x);
// var x = 7;
// function getName() {
//   console.log("you are learning hoisting");
// }

// console.log(getName);
// hoisting is a phenomenon where u can access the variable and function before initialised it or put some value in it.without error
//-----------//-------------
getName();
console.log(x);
var x = 7;
var getName = () => {
  //when getname is an arrow function it behaves like a variable
  console.log("you are learning hoisting");
};

var getname = function () {
  //in this case it also behaves as variable and store undefined first in global execution context creation phase
};
console.log(getName);
