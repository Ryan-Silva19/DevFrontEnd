// Exercício 3 – Verificação de peso para corrida
// Um atleta vai participar de uma corrida, e o peso define a categoria:
// Até 60 kg:
// Até 90 kg:
// Acima de 90 kg:
// Exiba uma mensagem na tela, de acordo com o peso do atleta
let weight = prompt("Insira seu peso meu jogador (em kg): ");
if (weight <= 60){
    alert("você é peso leve!")
}else if (weight <= 90) {
    alert("você é peso médio!")
}else {
    alert("você é peso pesado!")
}