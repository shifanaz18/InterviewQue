function x() {
  console.log("Namaste");
} ///this is callback function

function y(x) {
  x();
}

const radius = [3, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

//calculate code can be relaced with map
console.log(radius.map(diameter));

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

//so i can exactly chance calculate function like map

Array.prototype.calculate2 = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate2(diameter));
