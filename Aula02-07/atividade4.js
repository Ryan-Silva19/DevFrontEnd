// // 2 - Crie uma variável senha com o valor "1234".  
// Depois, compare com uma variável “tentativa” de login. Mostre se a senha está correta
let password = 1234;
let tentativa = 1235;
if (password == tentativa ){
    console.log(`A senha está correta`);
} else {
    console.log(`A senha está incorreta`);
}
// ou 
console.log(`A senha está ${tentativa == password}`);