let tasks = [];

// Load tasks from localStorage on page load
window.onload = function () {
    let storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    displayTasks(tasks);
};

// Save tasks to localStorage
function saveToLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add Task
function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Task cannot be empty!");
        return;
    }

    let newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveToLocal();
    displayTasks(tasks);

    input.value = "";
}

// Toggle Completed
function toggleComplete(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );

    saveToLocal();
    displayTasks(tasks);
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveToLocal();
    displayTasks(tasks);
}

// Display Tasks
function displayTasks(list) {
    let container = document.getElementById("taskList");
    container.innerHTML = "";

    list.forEach(task => {
        let div = document.createElement("div");
        div.className = "task";

        let textSpan = document.createElement("span");
        textSpan.innerText = task.text;
        if (task.completed) {
            textSpan.classList.add("completed");
        }

        let controls = document.createElement("div");

        let completeBtn = document.createElement("button");
        completeBtn.className = "complete";
        completeBtn.innerText = task.completed ? "Undo" : "Done";
        completeBtn.onclick = () => toggleComplete(task.id);

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = () => deleteTask(task.id);

        controls.appendChild(completeBtn);
        controls.appendChild(deleteBtn);

        div.appendChild(textSpan);
        div.appendChild(controls);

        container.appendChild(div);
    });
}

// Search Tasks in real-time
function searchTasks() {
    let query = document.getElementById("searchInput").value.toLowerCase();

    let filtered = tasks.filter(task =>
        task.text.toLowerCase().includes(query)
    );

    displayTasks(filtered);
}
