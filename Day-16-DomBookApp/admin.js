function adminPage() {
    window.location.href = "index.html";
}
let arr = [];
function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let obj = {
        title: title,
        author: author,
        category: category,
        imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
    }
    arr.push(obj);
    showCards();
}
function showCards() {
    let container = document.getElementById("cards");
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        html += `
        <div class="card">
            <img src = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg
">
            <p><b>Title:</b> ${arr[i].title}</p>
            <p><b>Author:</b> ${arr[i].author}</p>
            <p><b>Category:</b> ${arr[i].category}</p>
            <button onclick = "deleteBtn(${i})">Delete</button>
        </div>`;
    }
    container.innerHTML = html;
}
function sortCards(){
    arr.sort((a, b) => a.title.localeCompare(b.title));
    showCards();
}
function sortReverse(){
    arr.sort((a, b) => b.title.localeCompare(a.title));
    showCards();
}
function filterByCategory(){
    let container = document.getElementById("cards");
    let filter = document.getElementById("filter").value;
    let html = "";
    if(filter === "All"){
        showCards();
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].category === filter){
            html += `
        <div class="card">
            <img src = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg
">
            <p><b>Title:</b> ${arr[i].title}</p>
            <p><b>Author:</b> ${arr[i].author}</p>
            <p><b>Category:</b> ${arr[i].category}</p>
            <button onclick = "deleteBtn(${i})">Delete</button>
        </div>`;
        }
        
    }
    container.innerHTML = html;

}
function deleteBtn(index){
    alert(`Deleting book with author name: "${arr[index].author}" `);
    arr.splice(index, 1);
    showCards();
}

