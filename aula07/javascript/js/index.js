/*A diferença entre const, var e let.
Declaração de variável com var e let.
Declaração de constantes com const. Aqui o valor nunca será alterado. A declaração com var tem escopo(visibilidade) 
fora da estrutura declarar com let escopo(visibilidadde) local, ou seja, dentro da estrutura.
*/

var nome = "Lucas";
let sobrenome = "Santos"
console.log(nome,sobrenome);

if (nome=="Lucas"){
    var dados= "É uma pessoa jovem de 19 anos";
    let mais = " e também trabalha na lojinha do Jhon Alves";
}

console.log(dados);

const texto = "dez"; // Nunca pode ser trocado o valor, mas pode ser manipulado
console.log("O valor da constante é "+texto);   
console.log(texto.toUpperCase());//Deixar a mensagem maiúscula
