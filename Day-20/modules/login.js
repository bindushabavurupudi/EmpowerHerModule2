export function loginUser() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let found = users.find(user => user.email === email && user.password === pass);

    if (found) {
        localStorage.setItem("loggedIn", email);
        alert("Login Successful!");
        window.location.href = "todos.html";
    } else {
        alert("Invalid Credentials!");
    }
}
