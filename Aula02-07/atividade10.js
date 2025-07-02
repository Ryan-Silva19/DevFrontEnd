// Crie três variáveis:  
// nome (texto)
// email (texto)
// idade (número)
// Se o nome e o email não estiverem vazios e a idade for maior ou igual a 18, exiba "Cadastro válido".


// Senão, exiba "Cadastro incompleto ou inválido".
let name = prompt("Insira seu nome: ");
let email = prompt("Insira seu email: ");
let age = prompt("Insira sua idade: ");
if (name && email !=undefined && age >= 18){
    alert("Cadastrado válido");
}else{
    alert("Cadastro incompleto ou inválido");
}