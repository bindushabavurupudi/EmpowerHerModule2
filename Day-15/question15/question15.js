let btn = document.getElementById("addTask");
btn.addEventListener('click', () => {
    let ul = document.getElementById("ul");
    let taskName = document.getElementById("task").value;
    if (taskName.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    let ele = document.createElement("li");
    ele.innerText = taskName;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    deleteBtn.addEventListener('click', () => {
        ele.remove();
    });
    completeBtn.addEventListener('click', () => {
        ele.style.textDecoration = "line-through";
    });
    ele.appendChild(deleteBtn);
    ele.appendChild(completeBtn);
    ul.appendChild(ele);
    document.getElementById("task").value = "";

})