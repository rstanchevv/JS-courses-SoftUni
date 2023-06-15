class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }
    addBook (bookName, bookAuthor){
        if (this.capacity === 0 ){
            throw new Error("Not enough space in the collection.");
        }
        this.capacity--
        this.books.push({bookName, bookAuthor, payed:false})
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook( bookName ) {
        let findBook = this.books.find(x => x.bookName === bookName);
        let indexOfFindBook = this.books.indexOf(findBook);
        if (indexOfFindBook === -1){
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (this.books[indexOfFindBook].payed === true){
            throw new Error(`${bookName} has already been paid.`)
        }
        this.books[indexOfFindBook].payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let findBook = this.books.find(x => x.bookName === bookName);
        let indexOfFindBook = this.books.indexOf(findBook);
        if (indexOfFindBook === -1){
            throw new Error("The book, you're looking for, is not found.")
        }
        if (this.books[indexOfFindBook].payed === false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books.splice(indexOfFindBook,1);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor){
        let result = '';
        let sorted;
        if (bookAuthor === undefined){
            result += `The book collection has ${this.capacity} empty spots left.\n`
            sorted = this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));
            for (const book of sorted) {
                let paid = ''
                book.payed === true ? paid = 'Has Paid' : paid = "Not Paid"
                result += `${book.bookName} == ${book.bookAuthor} - ${paid}.\n`
            }
            return result.trim();
        } else {
            let findBook = this.books.find(x => x.bookAuthor === bookAuthor);
            if (!findBook){
                throw new Error(`${bookAuthor} is not in the collection.`)
            } else {
                let paid = '';
                findBook.payed === true ? paid = 'Has Paid' : paid = "Not Paid"
                return `${findBook.bookName} == ${findBook.bookAuthor} - ${paid}.`
            }
        }
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


