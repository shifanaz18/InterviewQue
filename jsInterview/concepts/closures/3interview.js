// A function along with reference to  its outer env together forms a closure.
// in other word closure is a combination of function and its lexical scope bundle together forms a closure.
// Each and every function of js has access to its outer lexical env.that means access to a variable and function which is present in the env of its parent.addEventListener
// Even when this function executed in some other scope not its original scope it still remebers its outer lexical env where it was originally present in the code.
// that is what closure is .

//Example

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }

// outer()();

// var close = outer(); //thos two line equivalent to line 17
// close();

////-----------//-------------///
// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   var a = 10; //it still fom a closure the inner function forms a closuer with its outside env not in particular sequence where it is present in the code.
//   return inner;
// }

// outer()();

////-----------//-------------///
// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   let a = 10; //it still fom a closure the inner function forms a closuer with its outside env not in particular sequence where it is present in the code.
//   return inner;
// }

// outer()();

////-----------//-------------///
// function outer(b) {
//   function inner() {
//     console.log(a, b);
//   }
//   let a = 10; //it still fom a closure the inner function forms a closuer with its outside env not in particular sequence where it is present in the code.
//   return inner;
// }

// outer("hi")();
////-----------//-------------///
// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     // let a = 10; //it still fom a closure the inner function forms a closuer with its outside env not in particular sequence where it is present in the code.
//     return inner;
//   }
//   return outer;
// }
// let a = 200;
// outest()("hi")();
//advantages of closers//
// one of is data hiding and encapsulation- suppose we have a variable  and we want to  have dataprivacy over it.so like other functions or other pieces of code
// cannot have access to particular data.

//example
// var counter = 0;//major flaw is here that anybody can access the counter
// function incrementCounter() {
//   counter++;
// }
// to avoid this we can use closure

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   };
// }

// // console.log(count)//nobody direct aceess the count

// var counter1 = counter();
// counter1();
// counter1();
// var counter2 = counter();
// counter2();

//////----------------////////
//constructor function()
function counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

//DISADVANTAGE
// there could be overconsumption of memory .the variable are not garbage collected till the program expires and if cannot handle properly can lead to memoryleaks
// what is garbage collector?
// It is the program in browser or in js engine which kind of freeze unutilized memory.

// How are closures and garbage collector related to each other?
// example

function a(params) {
  var x = 10;
  return function b(params) {
    console.log(x);
  };
}

var y = a(); // so when we call a() so  like now in y we are using x so somewhere we use y  we cannot free the memory so like this it accumulate more memory and not garbage collected.

// so in the mordern  browser js engine v8 and  crome  have basically smart garbage collection mechanism where it somehow find these variable are unreachable and they smartly collect this garbage variable.
// smartly collect this garbage variable

// function a(params) {
//     var x=10 ,z=10
//    return function b(params) {
//      console.log(x)
//     }
//  }
//  now here z is not being used so when a returns b function so z is garbage collected smartly x is not
