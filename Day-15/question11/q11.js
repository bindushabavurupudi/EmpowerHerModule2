let h1 =document.getElementById("h1");
h1.innerText = "Welcome to the DOM World!";
let p = document.getElementsByTagName("p");
for(let i of p){
    i.style.color = "blue";
}
let div = document.querySelector(".container");
div.style.backgroundColor = "yellow";
