// Exercício 4 – Dia da semana
// Dado um número de 1 a 7, mostre o dia da semana correspondente:  
// 1: Domingo
// 2: Segunda
// 3: Terça
// 4: Quarta
// 5: Quinta
// 6: Sexta
// 7: Sábado
// Qualquer outro número: “Dia inválido”
let day = prompt("Insira um número equivalente a um dia da semana: ")
if (day == 1) {
    alert("Domingo");
} else if (day == 2) {
    alert("Segunda")
} else if (day == 3) {
    alert("Terça")
} else if (day == 4) {
    alert("Quarta")
} else if (day == 5) {
    alert("Quinta")
} else if (day == 6) {
    alert("Sexta")
} else if (day == 7) {
    alert("Sábado")
} else {
    alert("Dia inválido")
}