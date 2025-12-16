Promise.all([
  Promise.resolve(10),
  Promise.reject("Oops"),
  Promise.resolve(30)
])
  .then(console.log)
  .catch(console.error);
