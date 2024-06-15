// block scope is like whatever compound statement written inside { this} is known as block scope
// mow let const have the block scope var has the global scope
// var a = 100;
// {
//   var a = 10;
//   let b = 101;
//   const c = 102;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a); //here is the shadowing like it has a global scope it overrides the val of a
// console.log(b);
// console.log(c);

//-------------///-------------
//Illegal shadowing

// var a = 100; //no issue
// {
//   var a = 200;
// }

// let a = 100; //syntax error is illegal shadowing
// {
//   var a = 200;
// }

// let a = 100;
// {
//   let a = 190;
// }

// console.log(a);

// var a = 20;
// {
//   let a = 300;
// }
/////

const a = 20;
{
  const a = 201;
  {
    const a = 20001;
    console.log(a);
  }
}
