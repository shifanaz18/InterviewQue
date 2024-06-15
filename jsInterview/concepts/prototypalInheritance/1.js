let arr = ["shifa", "Ali"];
let object = {
  name: "Shifa",
  city: "Hydrabad",
  getInto: function () {
    console.log(this.name + "from" + this.city);
  },
};

function fun(params) {}

// whenever you create any object js engine automatically put this hidden properties into an object and attaches to your object.

console.log(arr.__proto__);
