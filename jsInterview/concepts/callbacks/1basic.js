// What is callback function in js?

// -func are 1st class  citizens of js that means u can take a function pass into another function is known as a callback function.
// it gives access to the whole asynchronous world in a synchronous single threaded language.
// js is  synchronous single threaded language  that means it can only do one thing at a time in a specific order.
// but due to callback we can do async thing in js.

//Example
// function x(params) {

// }
// x(function y(params) {

// })

// here y is callback function.

setTimeout(function () {
  //it takes callback function and it will store it in seperate space and ttach timer
  console.log("timer");
}, 5000); //it takes a callback function. that means it is passed onto setTimeout and it called sometimes else in ur program ...and  when  after certain amount of time which you pass as second argument
//once this timer expires then this callback function get executed
function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});
//so injs has only one callstack called as main thread so whatever executed in side your page is executed through callstack only.
