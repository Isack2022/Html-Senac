// Fazer referência ao controle html do fromulário
const btn = document.getElementById("btnLogin");    
const txtuser = document.getElementById("txtuser");
const txtpass = document.getElementById("txtsenha");
let autenticado;
let token;
let key;


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
            console.log(dado)
            //Mudar tela 
            window.location.href=`list.html?key=${token}`;
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

    key = window.location.search.substring(5,window.location.search.length);
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
                <a href="#" onclick="editar('${item.idusuario}','${item.nomeusuario}','${item.email}','${item.foto}')">
                    <img src="img/lapis.png">
                </a>
            `
            estrutura.appendChild(div_user);
        })
    }).catch((error)=>console.log(`Error when executing the API ->${error}`));
}


function editar(id, usuario, email,foto){
    //Fazer uma referência ao body da página html
    
    const body = document.body;
    const div_shadow = document.createElement("div");
    const div_while = document.createElement("div");
    const form = document.createElement("form");
    const input_id = document.createElement("input");
    const input_user = document.createElement("input");
    const input_pass = document.createElement("input");
    const input_cpass = document.createElement("input");
    const input_email = document.createElement("input");
    const input_file = document.createElement("input");
    const input_sub = document.createElement('input');
    const fechar = document.createElement("a");
    

    //Aplicar atributos ao elemento
    div_shadow.setAttribute("id","div_shadow");

    div_while.setAttribute("id","div_while");

    fechar.setAttribute("href","#");
    fechar.setAttribute("id","fechar");
    fechar.setAttribute("onclick","fecharFormAtualizar();");
    fechar.innerHTML="&times;";
    div_while.appendChild(fechar);

    //Atributo para não enviar o formulário. O envio será via javascript.
    form.setAttribute("onsubmit","retrn false;");

    //Aplicar os atribtos ao id: type, placeholder e disabled
    input_id.setAttribute("type","text");
    input_id.setAttribute("placeholder",`Id do Usuário: ${id} `);
    input_id.setAttribute("disabled","true");

    //Aplicar os atributos ao user: type, placeholder e disabled
    input_user.setAttribute("type","text");
    input_user.setAttribute("placeholder",`Nome do usuário: ${usuario} `);
    input_user.setAttribute("disabled","true");

    //Aplicar os atributos a senha e a confimarção da senha
    input_pass.setAttribute("type","password");
    input_pass.setAttribute("placeholder","senha");

    input_cpass.setAttribute("type","password");
    input_cpass.setAttribute("placeholder","Confirma a senha");

    //Aplicar os atributos ao email: type e placeholder
    input_email.setAttribute("type","email");
    input_email.setAttribute("placeholder",`${email}`);

    //Aplicar os atributos ao controle file: type e value
    input_file.setAttribute("type","file");
    input_file.setAttribute("id","txtfoto");
    input_file.setAttribute("value",`${foto}`);

    //Aplicar os atributos ao botão 
    input_sub.setAttribute("type","submit");
    input_sub.setAttribute("value","Atualizar");
   
    input_sub.onclick = ()=>{
        if(input_cpass.value != input_pass.value){
            input_cpass.value= "";
            return alert("Senha de confirmaçãom incorreta");
        }
        else{
            fetch(`http://127.0.0.1:30021/users/update/${id}`,{
                method:"PUT",
                headers:{
                    "accept":"application/json",
                    "content-type":"application/json",
                    "token": key
                },
                body:JSON.stringify({
                    senha:input_pass.value,
                    email:input_email.value,
                    foto:input_file.value
                })
            }).then
        }
    }

    form.appendChild(input_id);
    form.appendChild(input_user);
    form.appendChild(input_pass);
    form.appendChild(input_cpass);
    form.appendChild(input_email);
    form.appendChild(input_file);
    form.appendChild(input_sub);
    div_while.appendChild(form);
    div_shadow.appendChild(div_while);
    body.appendChild(div_shadow);
}

function fecharFormAtualizar(){
    document.getElementById("div_shadow").style.zIndex="-100";
    document.getElementById("div_shadow").style.opacity="0";
    window.location.reload();
}

