// //Exercício 1 – Classificação de nota
// Utilizando a estrutura condicional (if else), exiba uma mensagem na tela, de acordo com a nota:
// 9 ou mais: “Excelente”
// Entre 7 e 9: “Bom”
// Entre 5 e 7: “Regular”
// Menor que 5: “Insuficiente”

let nota = prompt("Insira sua nota: ");
if (nota >= 9){ 
    alert("Excelente");
}else if (nota >= 6){ 
    alert("Bom");
}else if (nota >= 5){
    alert("Regular");
}else {
    alert("Insuficiente");
}