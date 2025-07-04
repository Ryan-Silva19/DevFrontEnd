// Exercício  3 – Calculadora simples
// Crie um switch para somar, subtrair, multiplicar ou dividir dois números, com base na operação ("+", "-", "*", "/").

let num = Number(prompt("insira um número: "))
let num2 = Number(prompt("insira outro número: "))
let operation = prompt("escolha uma operação (+(soma) -(subtração) *(multiplicação) /(divisão))")

switch (operation) {
    case "+":
        alert(`A soma = ${num + num2}`)
        break;
    case "-":
        alert(`A subtração = ${num - num2}`)
        break;
    case "*":
        alert(`A multiplicação = ${num * num2}`)
        break;
    case "/":
        alert(`A divisão = ${num / num2}`)
        break;
    default:
        alert("Insira uma entrada válida")
        break;
}