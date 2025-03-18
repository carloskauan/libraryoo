const book = require("./books/book");

class Library{
  constructor(){
    this.catalogy = [
      new book.Book({
        name: "N1984",  
        year: 1949,  
        author: "George Orwell",  
        price: 39.90  
      }, 0),
      new book.Book({
        name: "O Senhor dos Anéis",  
        year: 1954,  
        author: "J.R.R. Tolkien",  
        price: 89.90  
      },1),
      new book.Book({
        name: "Dom Casmurro",  
        year: 1899,  
        author: "Machado de Assis",  
        price: 29.90  
      },2),
      new book.Book({
        name: "O Pequeno Príncipe",  
        year: 1943,  
        author: "Antoine de Saint-Exupéry",  
        price: 25.00  
      },3),
      new book.Book({
        name: "Cem Anos de Solidão",  
        year: 1967,  
        author: "Gabriel García Márquez",  
        price: 49.90},4)];
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
  modifyDataBook(book,newDatas){
    let indexBook = this.catalogy.indexOf(book)
    let bookInCt = this.catalogy[indexBook]
    bookInCt.name = newDatas.name
    bookInCt.year = newDatas.year
    bookInCt.author = newDatas.author
    bookInCt.price = newDatas.price
  }

  showAllBooks(){
    this.catalogy.forEach((book)=>{
      book.showBookInf();
    });
  }

  getBook(idOrName){
    for(let i = 0; i < this.catalogy.length; i++){
      let bookCt = this.catalogy[i]
      if(isNaN(idOrName)){
        if(bookCt.name === idOrName){
          return bookCt;
        }
      }else if(bookCt._id == idOrName){
        return bookCt;
      }
    }
  }

}

module.exports = {Library};