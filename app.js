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
function modifyDataBook(){
  let idOrName = input("Digite ID ou Nome do livro a ser alterado\n>>")
  let book = library.getBook(idOrName);
  let ch = input(`Deseja alterar os dados do livro "${book.name}"?\n1 - Sim\n2 - Não\n>>`)
  if(ch == "2"){
    console.log("Cancelando alteração...")
    input("Enter to continue...")
    return
  }
  book.showBookInf()
  library.modifyDataBook(book ,solDataBook())
}
//Librarian handler

//General Options
function usersOptions(){
  console.log("Funções de usuario");
}
function librarianOptions(){
  let escLibrarian;
  while(true){
    escLibrarian = input("\nOpções de bibliotecario\n1 - Cadastrar livro\n2 - Deletar Livro\n3 - Alterar livro\n4 - Ver Catalogo \n>>");
    switch(escLibrarian){
      case "1":
        library.registerNewBook(solDataBook());
        break;
      case "2":
        let idToDelete = Number(input("Id do livro a ser excloido\n"));

        library.deleterBookForCatalogy(idToDelete);
        break;
      case "3":
        modifyDataBook()
        break;
      case "4":
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