const api = "https://api.coindesk.com/v1/bpi/currentprice.json";
const response = fetch(api);
console.log(response);

response.then(function (data) {
  console.log(data);
});
