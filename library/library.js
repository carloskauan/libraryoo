const book = require("./books/book");

class Library{
  constructor(){
    this.catalogy = [];
    this.lastIdRegistered = 0;
  }

  registerNewBook(inforBook){
    let newBook = new book.Book(inforBook, this.lastIdRegistered);
    this.lastIdRegistered++

    this.catalogy.push(newBook);
  }
  deleterBookForCatalogy(id){
    this.catalogy.forEach((book)=>{
      if(book._id === id){
        let idBook = this.catalogy.indexOf(book);
        this.catalogy.splice(idBook, 1);
      }
    });
  }

  showAllBooks(){
    this.catalogy.forEach((book)=>{
      book.showBookInf();
    });
  }

}

module.exports = {Library};