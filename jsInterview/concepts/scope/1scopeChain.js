//SCOPE MEANS WHERE YOU CAN ACCESS SPECIFIC VARIABLE OR FUNCTION IN OUR CODE THAT IS COPE

// function a() {
//   console.log(b);
// }

// var b = 10;
// a();
//-------------////------------------//
// function a() {
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// var b = 10;
// a();

//-------------////------------------//
// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();

//SCOPE IS DIRECTLY DEPENDANT ON THE LEXICAL ENVIRONMENT
// LEXICAL MEAN -IN HIERARCHY ORMEANS IN SQUESNCE
// WHENEVER EXECUTION C0NTEXT IS CREATED THE LEXICAL ENV IS ALSO CREATED

// SO THE LEXICAL ENV IS LOCAL MEMORY ALONG WITH LEXICAL ENV OF ITS PARENT

// NOW HERE IN this above example
// when js engine encouters this line no 26 itv tries to find out "b" in local memory space of c()
// if its not found the engine goes to lexical env of its parent.

function a() {
  c();
  function c() {
    console.log(b);
  }
}
var b = 10;
a();

//// so this way of finding known as scope chain.scope chain is nothing but the chain of all this lexical env and parent references
