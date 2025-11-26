// Question 1: Closure-Based Counter Implementation
function createCounter() {
    let count = 0;
    function increment() {
        count++;
        console.log(`Current count: ${count}`);
    }
    function decrement() {
        count--;
        console.log(`Current count: ${count}`);
    }
    function display() {
        console.log(count);
        console.log(`Current count: ${count}`);
    }
    return { increment, decrement, display };
}
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1

// Question 2: Simulating Private Variables with Closures
function createBankAccount() {
    let balance = 0;
    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}`);
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: ${amount}`);
            } else {
                console.log("Insufficient balance");
            }
        },
        getBalance() {
            return balance;
        }
    };
}
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined


