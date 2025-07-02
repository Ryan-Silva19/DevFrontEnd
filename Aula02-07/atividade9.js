// Exercício 5 – Acesso ao sistema com duas condições
// Crie duas variáveis:  
// usuarioAtivo (booleano)  
// senhaCorreta (booleano)  
// O acesso é liberado somente se o usuário estiver ativo e a senha estiver correta. 
let usuarioAtivo = prompt("Insira seu login: ");
let senhaCorreta = prompt("Insira sua senha: ");
if (usuarioAtivo == "ryan" && senhaCorreta == "ryan"){
    alert("Você logou com sucesso!");
} else{
    alert("Usuário ou senha incorretos, tente novamente");
}