/**
 * Close with HOF eample
 */

function getGreetinh(salutation) {
  return function greeting(name) {
    console.log("Hello", salutation, name);
  };
}

const saluteMr = getGreetinh("Mr");
const saluteMiss = getGreetinh("Miss");
const saluteMrs = getGreetinh("Mrs");

saluteMr("Ahmed");
saluteMr("Anwar");
