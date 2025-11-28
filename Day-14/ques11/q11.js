
function displayMessage(name){
    console.log(`Hello, ${name}`);
}
function getUserInput(callback){
    setTimeout(()=>{
        callback("Alice");
    }, 1000)
};
getUserInput(displayMessage)
