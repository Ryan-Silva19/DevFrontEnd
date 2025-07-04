// Exercício 1 – Traduzindo o número do mês
// Crie um switch que, dado o número do mês (1 a 3), exiba:
// 1: Janeiro
// 2: Fevereiro
// 3: Março
// Qualquer outro número: “Mês inválido”

let month = Number(prompt("Insira um número: "));

switch (month) {
    case 1:
        alert("Você escolheu o mês de Janeiro");
        break;
    case 2:
        alert("Você escolheu o mês de Fevereiro");
        break;
    case 3:
        alert("Você escolheu o mês de Março");
        break;
    default:
        alert("Deu ruim, insira um valor válido")
        break;
}