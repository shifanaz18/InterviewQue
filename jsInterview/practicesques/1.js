const obj = [
  {
    key: "sample 1",
    data: "data 1",
  },
  {
    key: "sample 1",
    data: "data 1",
  },
  {
    key: "sample 2",
    data: "data 2",
  },
  {
    key: "sample 1",
    data: "data 1",
  },
  {
    key: "sample 3",
    data: "data 1",
  },
  {
    key: "sample 4",
    data: "data 1",
  },
];

let out = {};

obj.forEach((e) => {
  if (out[e.key]) {
    out[e.key].push(e);
  } else {
    out[e.key] = [e];
  }
});

console.log("output", out);

// let obj = {
//   name: "Ahmed",
//   age: 16,
// };

// let key = "age";
// // console.log(obj.name);
// console.log(obj["name"]);
