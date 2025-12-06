function addPara(){
    let div = document.getElementById("para");
    let p = document.createElement("p");
    p.innerText = "This is a new paragraph.";
    div.appendChild(p);
}
function removePara(){
    let div = document.getElementById("para");
    if(div.children.length === 0) {
        alert("No paragraphs");
        return;
    }
    div.removeChild(div.lastElementChild);
}