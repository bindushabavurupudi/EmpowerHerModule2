function isValidColor(color) {
    let s = new Option().style;  
    s.color = color;
    return s.color !== '';       
}
function changeBg(){
    let color = document.getElementById("color").value;
    if(!isValidColor(color)){
        alert("Invalid color name!");
    }
    else{
        let para = document.getElementById("para");
    para.style.backgroundColor = color;  
    } 
}
function updateText(){
    let text = document.getElementById("text").value;
    if(text === ""){
        alert("Please enter some text!")
    }
    else{
        let para = document.getElementById("para");
        para.innerText = text;   
    }
}