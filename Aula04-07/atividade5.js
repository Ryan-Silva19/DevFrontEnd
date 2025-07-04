// Exercício 5 – Cálculo de imposto por salário
// Exiba na tela quanto de imposto o cliente vai pagar:
// Até R$ 1.500 → Isento
// De R$ 1.501 até R$ 3.000 → 10%
// De R$ 3.001 até R$ 5.000 → 15%
// Acima de R$ 5.000 → 20%
let salario = prompt("Insira o seu salário (R$): ");
if (salario <= 1500) {
    alert("Isento");
}else if (salario > 1500 && salario <= 3000) {
    alert("10% de imposto");
}else if (salario > 3000 && salario <= 5000) {
    alert("15% de imposto");
}else if (salario > 5000) {
    alert("25% de imposto");
}