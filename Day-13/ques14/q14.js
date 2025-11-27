
console.log("Begin");
setTimeout(() => {
    console.log("Timeout Task");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise Task");
});
console.log("End");

//Answer
//There is no error in the given code snippet.
// 1. Synchronous code: runs immediately
// console.log("Begin")
// console.log("End")

// 2. Microtasks Queue
// Promises are microtasks
// So "Promise Task" runs before any timeout.

// 3. Macrotasks Queue
// setTimeout(..., 0) goes into macrotask queue
// So "Timeout Task" runs last.