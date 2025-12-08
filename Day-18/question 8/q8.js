let tasks = document.getElementById("tasks");
let arr = [];
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(data => data.json())
    .then(data => {
        for (let i = 0; i < 20; i++) {
            arr.push(data[i]);
        }
        localStorage.setItem("tasks", JSON.stringify(arr));
        show();
    });
function show() {
    let data = JSON.parse(localStorage.getItem("tasks")) || [];
    let html = "";
    for (let i = 0; i < data.length; i++) {
        let statusClass = data[i].completed ? "status-true" : "status-false";

        html += `
        <div class="box">
            <div>
                <p><b>Title:</b> ${data[i].title}</p>
                <p><b>Status:</b> <span class="${statusClass}">
                    ${data[i].completed}
                </span></p>
            </div>
            <button onclick="deleteTask(${i})">Delete</button>
        </div>`;
    }
    tasks.innerHTML = html;
}
function deleteTask(index) {
    let data = JSON.parse(localStorage.getItem("tasks")) || [];
    alert(`Deleting task with title: ${data[index].title}`);
    data.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(data));
    show();
}

