const cart = ["shoe", "bag", "belt", "shirt"];
const promise = createOrder(cart);
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    //so here i am attaching callback function
    return proceedPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function proceedPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Is Succesfull");
  });
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //Promise is constructors where we pass function resolve and reject
    //createOrder
    //validateOrder
    //orderId
    if (!validateCart(cart)) {
      console.log("inside");
      const err = new Error("CArt is not valid");
      reject(err);
    }
    //logic for create order
    const orderId = "123";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}
