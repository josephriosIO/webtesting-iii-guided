const uuid = require("uuid");
const axios = require("axios");
module.exports = {
  makePerson,
  forEvenOnly,
  greet
};

function makePerson(firstName, lastName) {
  return {
    id: uuid(),
    name: `${firstName} ${lastName}`
  };
}

function forEvenOnly(number, callback) {
  if (number % 2 === 0) {
    callback(number);
  }
}
function greet(cb) {
  return cb();
}
