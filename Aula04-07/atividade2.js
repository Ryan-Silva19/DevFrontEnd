// Exercício 2 – Preço de ingresso por idade
// Utilizando a estrutura condicional (if else), exiba uma mensagem na tela, de acordo com o valor do ingresso:
// Menores de 12 anos: R$ 10
// Entre 12 e 17 anos: R$ 15
// Entre 18 e 59 anos: R$ 30
// A partir de 60 anos: R$ 20

let age = prompt("Insira sua idade pra vermos o valor do ingresso: ");
if (age <= 12) {
    alert("O preço do ingresso é R$10");
} else if (age >= 17) {
    alert("O preço do ingresso é R$15");
} else if (age >= 59){
    alert("O preço do ingresso é R$30");
} else{
    alert("O preço do ingresso é R$20");
}