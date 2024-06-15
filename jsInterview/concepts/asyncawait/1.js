// What is async? async is a keywork that is used to create  async function.

// what is async function?
// async fn always returns a promise .and if the function doesnt return promise by itself it returns a value thenit will automatically wrapped inside the promise and it will return a promise
// in any case it will always returns a promise

// async function getData(params) {
//   return "hello";
// }

// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then((data) => console.log(data));
//-----------//----------
// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolved!!");
// });

// async function getData(params) {
//   return p;
// }
// const dataPromise = getData();
// dataPromise.then((data) => console.log(data));

//-----------//----------

// async and await combo is used to handle promises

// like first we use promise then to handle promise like below

// const pr = new Promise((resolve, reject) => {
//   resolve("promise resolved");
// });

// pr.then((data) => {
//   console.log(data);
// });

//this above canbe handled using async await as
const pr = new Promise((resolve, reject) => {
  resolve("promise resolved");
});

async function handlePromise() {
  const val = await pr;
  console.log(val);
}
handlePromise();

// await is a keyword that can only be used inside an async function
