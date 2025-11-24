let username = "Bindusha";
let course = "Js";
console.log(`Hello ${username}, welcome to the ${course} course!`)
const name1 = "Ram";
const age = 21;
const student = {
  name1,
  age,
  greet: function () {
    console.log("Hello");
  }
};
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Bindu", "Sha"))