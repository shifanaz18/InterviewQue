//promise is nothing but a empty object
const cart = ["shoe", "bag", "belt", "shirt"];
//now lets seee the scenario where i want to create an order on the basis of order i want to proceed the payment but all this calls are async so i need to pass
// the callback function proceedToPayment to createOrder like this

createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});
//so the issue is INVERSION OF CONTROL-we have passed this function to createOrder api but what if the api never calls a function back or it might call it twice.like this createorder service can be written by other developer or team so we cant blindly trust to this api

//like in this case we are just giving the control of our program to some other part of our code which we are not aware of

//to avoid the we simply create a api which doesnt take callback its simply take cart and return some promise

const promise = createOrder(cart);
//{data:undefined} ....as soon as  js engine execute createOrder api this object is empty as shown here in this line
//{data:orderDetails}... afeter some time it filled with certain values.

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

// promise is a placeholder for certain period of time untill we receive a value from a async operation.
//  or its container for future value.

//  what is promise :- promise is an object respesenting the eventual complition of an asynchronous operation

//now suppose we have multiple callbasck like payment need order ordersummary need paymeentinfo

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateBalance();
    });
  });
});

// this is we call callback hell where program grows horizontally also known as pyramid of doom
//this can be avoid using primise chain
createOrder(cart).then(function () {
  return proceedToPayment(orderId); //whatever is returning from here passing to the below then
});
then(function (paymeentinfo) {
 return showOrderSummary(paymeentinfo);
});
.then(function () {
    return updateBalance();
  });
  
//now its flowing in meaningful chain pattern
// or use arrow function
createOrder(cart)
.then((orderId)=>proceedToPayment(orderId));
.then((paymeentinfo)=>showOrderSummary(paymeentinfo));
.then(()=>updateBalance());