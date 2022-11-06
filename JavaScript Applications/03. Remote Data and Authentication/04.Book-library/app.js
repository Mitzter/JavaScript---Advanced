const loadButton = document.getElementById("loadBooks").addEventListener("click", getAllBooks);

async function getAllBooks(){
    const url = "http://localhost:3030/jsonstore/collections/books";
    const response = await fetch(url);
    const data = await response.json(data);

    loadBooks(data);
}

function loadBooks(data){
    for(let i = 0; i < data.length; i++){
        let bookTitle = data[i].title;
        let bookAuthor = data[i].author;

        const pTitle = document.createElement('p');
        pTitle.textContent = bookTitle;
        const pAuthor = document.createElement('p');
        pAuthor.textContent = bookAuthor;

        const buttonEdit = document.createElement("button");
        const buttonDelete = document.createElement("button");
    }
    
}