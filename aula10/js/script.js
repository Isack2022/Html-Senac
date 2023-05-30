//Fazer uma referência ao bodyn usando document.body
const body = document.body;
const div1 = document.createElement("div");
const btn1 = document.createElement("button");

div1.setAttribute("id", "resultado");
btn1.setAttribute("id","btn1");
btn1.innerHTML="Executar";


btn1.onclick = () =>{
    let n1, n2, soma=0, subtrair=0,mutiplicar=0, dividir=0, resto=0;
    n1 = prompt("Digite um valor:");
    n2 = prompt("Digite um outro valor:");

    //Vamos converter para parseInt
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    soma = n1 + n2;
    subtrair = n1 -n2;
    mutiplicar = n1 * n2;
    dividir = n1 / n2;
    resto = n1 % n2;

    //Pegar um elemento html por id
    document.getElementById("resultado").innerHTML="O resultado da soma é "+soma+"<br>";
    document.getElementById("resultado").innerHTML+='O resultado da subtração '+subtrair+'<br>';
    document.getElementById("resultado").innerHTML+='O resultado da divisão é "mais ou menos" '+dividir+'<br>';
    document.getElementById("resultado").innerHTML+=`O resultado da mutiplicação  é ${mutiplicar} <br>`;
    document.getElementById("resultado").innerHTML+=`O resultado do resto é ${resto} <br>`;
}

const btn2 = document.createElement("button");
btn2.setAttribute("id","btn2");
btn2.innerHTML="Função de CallBack";

btn2.onclick = () =>{
    // exibir("Texto qualquer");
    // calcPer(500,6);

    //Utilizando a dunção de callback
    // calPercent(600,5,mostrar);  
    let n = [10,30,5,80,12];
    // somaPares(n,n.length,apresentar,mostrar);
    maiorValor(n,n.length,fx);
}



body.appendChild(btn1);
body.appendChild(btn2);
body.appendChild(div1);


//Área de funções
function exibir(dados){
    document.getElementById("resultado").innerHTML =dados;
}
function calcPer(preco, percent){
    let rs = preco * percent /100;
    exibir(rs);
}

/*
Função de callback
Com a função de callbak, uma função é passada por parâmetro para outra
função e assim a função que tem o callback com parâmetro executará a sua parte quando
callback executar a sua 
*/
function calPercent(preco,percent,func){
    rs = preco * percent /100;
    func(rs);
}
function mostrar(valor){
    document.getElementById("resultado").innerHTML=`<strong>O resultado é ${valor} <strong>`;
}

function somaPares(arrNum,arrTm,fun,fun2){
    let rs =0;
    for(let i = 0; i<arrTm; i++){
        console.log(fun(arrNum[i]));
        rs += arrNum[i];
    }
    fun2(rs);
}
function apresentar(v){
    return `Recebemos o valor ${v} para calcular`;
}

function maiorValor(arrNum,arrTm,fx){
    let m = arrNum[0];
    for(let i = 1; i < arrTm; i++){
        if(arrNum[i] > m){
            m = arrNum[i];
        }
    }
    console.log(fx(arrTm,m));
}

function fx(tm,rs){
    return `O tamanho do arry é ${tm} e o maior valor é ${rs}`;
}