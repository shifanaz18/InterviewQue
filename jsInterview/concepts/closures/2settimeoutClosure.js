// function x(params) {
//   var i = 1;
//   // what does setTimeout do is it attaches the callback function and stores it to some place and attaches a timer to it.
//   // and js proceed it doesnt wait for anything it just goes to the next line and print the namaste js thats how js works and once the timer expires it takes that function put it again in the callstack and runs it
//   setTimeout(function () {
//     //this function remembers reference to i and forms a closure so wherever this function goes it takes reference of i along with it.
//     console.log(i);
//   }, 3000);
//   console.log("Namaste Javascript");
// }

// x();

///-----------//-------

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     // now var  has a global scope
//     setTimeout(function () {
//       // when loop runs for the first time it makes copy of a function and attaches a timer and also remember the reference of i so all the five copy of the function are pointing to same reference of i
//       console.log(i); // function  still remebers its lexical reference to i
//     }, i * 1000);
//   }
//   console.log("Hello");
// }

// x();
///-----------//-------//

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     //it has block a scope so the copy of i in each iteration is new.
//     setTimeout(function () {
//       console.log(i); //each every time function is called is refering to different memory location individual copy of i
//     }, i * 1000);
//   }
//   console.log("Hello");
// }

// x();

///-----------//-------//
function x() {
  for (let i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("namaste");
}

x();
