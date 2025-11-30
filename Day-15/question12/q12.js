let list = document.querySelector("ul");
let cnt = 0;
function addItem() {
    let newItem = document.createElement("li");
    newItem.innerText = "New Item";
    if (cnt % 2 != 0) {
        newItem.style.color = "blue";
        newItem.style.fontWeight = "bold";
    }
    else{
        newItem.style.color = "red";
        newItem.style.fontStyle = "italic";
    }
    cnt++;
    list.appendChild(newItem);

}