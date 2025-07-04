// Exercício 2 – Tipo de usuário
// Um sistema possui 3 tipos de usuários:
// "admin": acesso total
// "editor": acesso limitado
// "visitante": acesso somente leitura
// Use um switch para exibir a permissão com base no tipo.

let permission = prompt("Insira seu tipo de usuário(visitante/editor/admin): ")
switch (permission) {
    case "editor":
        alert("seus privilégios são: acesso limitado");
        break;
    case "visitante":
        alert("seus privilegios são: acesso somente leitura");
        break;
    case "admin":
        alert("seus privilegios são: acesso total");
        break;

    default:
        alert("Insira um usuário válido")
        break;
}