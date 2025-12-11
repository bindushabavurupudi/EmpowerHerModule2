import { displayTodos } from "./displayTodos.js";

function checkLogin() {
    let user = localStorage.getItem("loggedIn");
    if (!user) {
        alert("Please login first!");
        window.location.href = "login.html";
    }
}

checkLogin();

async function fetchTodos() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    displayTodos(data.slice(0, 20)); // show first 20
}

fetchTodos();
