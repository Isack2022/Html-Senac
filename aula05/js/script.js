// Fazer referência ao controle html do fromulário
const btn = document.getElementById("btnLogin");    
const txtuser = document.getElementById("txtuser");
const txtpass = document.getElementById("txtsenha");
let autenticado;
let token;


btn.onclick = ()=>{
    // Validaçãi dos campos usuário e senha
    if(txtuser.value.trim()=="" || txtpass.value.trim()==""){
        return alert("Nome de usuário ou senha obrigatório");
    }else{
        /*
        Vamos usar o comando fetch(buscar) pra fazer uma requisição a nossa
        API e, realizar o login.Passaremos o nome de usuário e senha.
        */
       fetch("http://127.0.0.1:30021/users/login",{  
            method:"POST",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                nomeusuario:txtuser.value,
                senha:txtpass.value
            })
       }).then((response)=>response.json())
       .then((dado)=>{
        console.log(dado);
        if(dado.output=="Authenticated"){
            autenticado = true;
            token = dado.token;
            txtuser.value = "";
            txtpass.value = ""; 
        }
        else{
            txtuser.value = "";
            txtpass.value = ""; 
            return alert("Usuário ou senha incorreto")
            
        }
        })
       .catch((error)=>console.log(`Não foi possível requisitar a API -> ${error}`));

    }
}

document.getElementById("register").onclick = ()=>{
    document.getElementById("shadow").style.zIndex="100";
    document.getElementById("shadow").style.opacity="1";

}

document.getElementById("close").onclick = ()=>{
    document.getElementById("shadow").style.zIndex="-100";
    document.getElementById("shadow").style.opacity="0";
}

//Script para cadastrar o novo usuário no banco de dados
const btncad = document.getElementById("btnregister");  
const txtusuario = document.getElementById("txtusuario");
const txtpassword = document.getElementById("txtpassword");
const txtemail = document.getElementById("txtemail");
const txtfoto = document.getElementById("txtfoto");

btncad.onclick = ()=>{
    if(txtusuario.value.trim()==""||txtpassword.value.trim()==""|| txtemail.value.trim()==""|| txtfoto.value.trim()==""){
        return alert("Todos os campos devem ser preenchidos");
    }else{
        fetch("http://127.0.0.1:30021/users/insert",{
            method:"POST",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                nomeusuario:txtusuario.value,
                senha:txtpassword.value,
                email:txtemail.value,
                foto:txtfoto.value
            })
        }).then((response)=>response.json())
        .then((result)=>{
            console.log(result);
            if(result.output=="Inserted"){
                alert("Usuário cadastrado com sucesso!");
                txtusuario.value = "";
                txtpassword.value = "";
                txtemail.value = "";
                txtfoto.value= ""; 
                document.getElementById("shadow").style.zIndex="-100";
                document.getElementById("shadow").style.opacity="0";
            }else{
                alert("Não possível cadastrar. Tente outra vez");
            }
        })
        .catch((error)=>console.error(`Error when registering-> ${error}`));
    }
}


function carregarDados(){
    const estrutura = document.getElementById("estrutura");

    fetch("http://127.0.0.1:30021/users/list").then((response)=>response.json())
    .then((result)=>{
        result.data.map((item,index)=>{
            //Criandouma div com class e let para colocar os dados dos usuários
            let div_user = document.createElement("div");
            div_user.setAttribute("class","div_user");
            div_user.innerHTML=`
                <img src="img/perfil.png">
                <h2>${item.nomeusuario}</h2>
                <h3>${item.email}</h3>
                <a href="#" onclick="editar('${item.idusuario}','${item.nomeusuario}')">
                    <img src="img/lapis.png">
                </a>
            `
            estrutura.appendChild(div_user);
        })
    }).catch((error)=>console.log(`Error when executing the API ->${error}`));
}


function editar(id, usuario){
    alert(`O id é ${id} e o nome é ${usuario}`)
}