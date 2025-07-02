// Exercício 4 – Compra mínima com condição extra
// Crie duas variáveis:  
// valorCompra
// clienteVip (booleano)  
// Se a compra for maior ou igual a 100 ou o cliente for VIP, exiba "Desconto aplicado". Senão, exiba "Sem desconto".
let valorDaCompra = prompt("Insira o valor da compra: ");
let clienteVip = prompt("Você é cliente vip ? insira sim ou não");
if (valorDaCompra >= 100 || clienteVip == "sim"){
    alert("Desconto aplicado");
}else{
    alert("Sem desconto");
}