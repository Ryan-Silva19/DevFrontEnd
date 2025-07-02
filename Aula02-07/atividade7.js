// Exercício 3 – Verificando acesso com senha
// Crie uma variável senha.
// Se for igual a "1234", exiba "Acesso liberado".
// Caso contrário, exiba "Senha incorreta".
let password = prompt("Insira sua senha pra poder ter acesso ao site: ");
let realpasswd = "senha";
if (password == realpasswd){
    alert("Você acertou sua senha! parabéns");
}else{
    alert("Você errou a senha, tente senha");
}