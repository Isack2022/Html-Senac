let arrCidade = [
    "Salvador",
    "São Paulo",
    "Belo Horizonte",
    "Fortaleza",
    "Rio de Janeiro",
    "Curitiba",
    "Recife",
    "Holambra",
    "Volta Redoda",
    "Barueri"
];

//for, estrutura tradicional
// for(let i =0;i < arrCidade.length;i++){
//     console.log(`${i+1}º Cidadeda ${arrCidade[i]}`);
// }

//foreach, esrutura que pertence ao array
//Coleção simples é normalmente
//O primeiro é o valor de array e o segundo variavel é a posição 
// arrCidade.forEach(function(v,i){
//     console.log(`${i+1}º Cidade ${v}`)
// });


//map, estrutura que pertence ao array
//Pode ler objeto 
// arrCidade.map(function(y,i){
//     console.log(`${i+1}º Cidade ${v}`)
// })

const produto1 ={
    id:60,
    nome:"Mouse",
    preco:20.00
};
const produto2 = {
    id:51,//Palmeiras sem Mundial kkkkkkk 🤣🤣
    nome:"Teclado",
    preco:10.00
};

const listaproduto =[produto1,produto2];
listaproduto.map((v)=>{
    console.log(`Nome: ${v.nome} Preço: ${v.preco}`);
});