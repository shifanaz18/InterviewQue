// closure-a function bind together with its lexical env.
// function along a lexical scope bundle together  form a closure

// function x(params) {
//   var a = 7;
//   function y(params) {
//     console.log(a);
//   }
//   y();
// }
// x();

// or it we can pass the function
// function x(params) {
//   var a = 7;
//   function y(params) {
//     console.log(a);
//   }
//   return y; //When we return y not only function was return closure was return closure is nothing but a function+ its lexical scope
// }
// var z = x(); //like in this call stack when x return it vanishes from call stack
// console.log(z);
// z(); //though x no longer exist but still y() remeber its lexical scope
//so wherever we execute function z() it will remeber the refernce of a and prints it

//------//----//
//same as above
// function x(params) {
//   var a = 7;
//   function y(params) {
//     console.log(a);
//   }
//   a = 100; // a's values is not return its reference to a return
//   return y;
// }

// var z = x();
// console.log(z);
// z();
//------//----//
function z() {
  var b = 900;
  function x(params) {
    var a = 7;
    function y(params) {
      //y form the closure along with scope of x and z
      console.log(a, b);
    }
    a = 100; // a's values is not return its reference to a return
    y();
  }
  x();
}

z();

///uses of closure in

//module design pattern
//currying in js
//function like once
//memoize
//maintaining statein async worl
//settimeouts
//Iterators
//and many more
