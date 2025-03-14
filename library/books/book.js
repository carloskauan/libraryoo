class Book{
  constructor(inforBook, id){
    this._id =  id;
    this.name = inforBook.name;
    this.year = inforBook.year;
    this.author = inforBook.author;
    this.price = inforBook.price;
  }

  showBookInf(){
    console.log(`---------------\nID - ${this._id}\nNOME - ${this.name}\nANO - ${this.year}\nAUTOR - ${this.author}\nPREÇO - ${this.price}\n---------------`);
  }
}

module.exports = {Book}