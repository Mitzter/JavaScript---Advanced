class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
        
    }
    
    addBook(bookName,bookAuthor){
        let book = {
            bookName: "",
            bookAuthor: "",
            payed: false
        }
        if(this.books.length >= this.capacity){
            throw new Error("Not enough space in the collection.");
        }
        book.bookName = bookName;
        book.bookAuthor = bookAuthor;

        this.books.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;

    }

    payBook(bookName){
        let book = this.books.find(x => x.bookName === bookName);
        if(!book){
            throw new Error(`${bookName} is not in the collection.`);
        } else if(book.payed === true){
            throw new Error(`${bookName} has already been paid.`);
        } else {
            book.payed = true;
            return `${bookName} has been successfully paid.`;
        }

    }

    removeBook(bookName){
        let book = this.books.find(x => x.bookName === bookName);
        let index = this.books.indexOf(book);
        if(!book){
            throw new Error("The book, you are looking for, is not found.");
        } else if (book.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`;
        }
    }

    getStatistics(bookAuthorInput){
        let stringBuilder = "";
        let emptySlots = this.capacity - this.books.length;
        
        if(bookAuthorInput === undefined){
            stringBuilder += `The book collection has ${emptySlots} empty spots left.\n`;
            this.books.sort((a,b) => a.bookName - b.bookName);
            for(let i = 0; i < this.books.length; i++){
                let bookName = this.books[i].bookName;
                let bookAuthor = this.books[i].bookAuthor;
                let payed = this.books[i].payed;
                payed = payed === true ? `Has Paid` : `Not Paid`;
                if(i === this.books.length -1){
                    stringBuilder += `${bookName} == ${bookAuthor} - ${payed}.`;
                } else {
                    stringBuilder += `${bookName} == ${bookAuthor} - ${payed}.\n`;    
                }

                
            }
            return stringBuilder;
        } else {
            let book = this.books.find(x => x.bookAuthor === bookAuthorInput);
            let bookName = book.bookName;
            let bookAuthor = book.bookAuthor;
            let payed = book.payed;
            payed = payed === true ? `Has Paid` : `Not Paid`;
            if(!book){
                throw new Error(`${bookAuthorInput} is not in the collection.`);
            } else {
                stringBuilder += `${bookName} == ${bookAuthor} - ${payed}.`;
            }

            return stringBuilder;
        }

    }

    
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

