// if (true) {
//   let x = 10;
//   var y = 20;
// }
// console.log(y);
// console.log(x);
// ReferenceError: x is not defined
//Because x is declared using let and let is block scope and doesn't exit outside that if condition


const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};


console.log(profile?.user?.details?.email);

console.log(profile?.user?.details?.phone);