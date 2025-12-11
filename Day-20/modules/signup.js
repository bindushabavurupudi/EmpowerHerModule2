export function signupUser() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({ email, password: pass });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful!");
    window.location.href = "login.html";
}
