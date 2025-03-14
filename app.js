const input = require("synchro-prompt");

const lb = require("./library/library.js");
const library = new lb.Library(); 

//Librarian handler
function solDataBook(){
  let inforBook = {
    name:  input("Nome: "), 
    year: input("Ano: "), 
    author: input("Autor: "), 
    price: input("Preço: "), 
  }
  return inforBook;
}
//Librarian handler

//General Options
function usersOptions(){
  console.log("Funções de usuario");
}
function librarianOptions(){
  let escLibrarian;
  while(true){
    escLibrarian = input("\nOpções de bibliotecario\n1 - Cadastrar livro\n3 - Ver Catalogo>>\n");
    switch(escLibrarian){
      case "1":
        library.registerNewBook(solDataBook());
        break;
      case "3":
        library.showAllBooks();
        break;
    }
  }
}
//General Options

//Main code
let renew = true;
console.log("BEM VINDO A NOSSA LIVRARIA")

let esc
while(renew){
  esc = input("1 - Cliente\n2 - Bibliotecario\n>>");
  switch(esc){
    case "1":
      usersOptions();
      break;
    case "2":
        librarianOptions();
      break;
    default:
      console.log("Opção invalida")
      input("Enter para continuar...")
  }
}
//Main code