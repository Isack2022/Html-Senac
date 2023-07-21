document.getElementsByClassName("btn-mobile")[0].onclick =() =>{
    document.getElementsByTagName("nav")[0].style.marginLeft = "0px";
}; 

function closeMenu(){
    document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "#532D10";
    document.querySelector(".cat-cardapio a").style.color = "white";
    document.querySelector(".cat-cardapio a span").style.color = "white";
    document.getElementById("Bolos").style.display= "none";
    document.getElementById("Sobremesa").style.display= "none";
    document.getElementById("Salgados").style.display= "none";
    document.getElementById("Bebidas").style.display="none";
}

function mudaItem(cat){
    switch(cat){
        case "Cafes":
            document.getElementById(cat).style.display = "Inline-flex"
            document.getElementById("Bolos").style.display= "none";
            document.getElementById("Sobremesa").style.display= "none";
            document.getElementById("Salgados").style.display= "none";
            document.getElementById("Bebidas").style.display="none";
            trocaSelecao(cat);
            break;
        case "Bolos":
            document.getElementById(cat).style.display = "Inline-flex"
            document.getElementById("Cafes").style.display= "none";
            document.getElementById("Sobremesa").style.display= "none";
            document.getElementById("Salgados").style.display= "none";
            document.getElementById("Bebidas").style.display="none";
            trocaSelecao(cat);
            break;
        case "Sobremesa":
            document.getElementById(cat).style.display = "Inline-flex"
            document.getElementById("Cafes").style.display= "none";
            document.getElementById("Bolos").style.display= "none";
            document.getElementById("Salgados").style.display= "none";
            document.getElementById("Bebidas").style.display="none";
            trocaSelecao(cat);
            break;
        case "Salgados":
                document.getElementById(cat).style.display = "Inline-flex"
                document.getElementById("Cafes").style.display= "none";
                document.getElementById("Bolos").style.display= "none";
                document.getElementById("Sobremesa").style.display= "none";
                document.getElementById("Bebidas").style.display="none";
                trocaSelecao(cat);
                break;
        case "Bebidas":
            document.getElementById(cat).style.display = "Inline-flex"
            document.getElementById("Cafes").style.display= "none";
            document.getElementById("Bolos").style.display= "none";
            document.getElementById("Salgados").style.display= "none";
            document.getElementById("Sobremesa").style.display="none";
            trocaSelecao(cat);
            break;
        }
    
    function trocaSelecao(cat){
        if(cat=="Cafes"){
            document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "#532D10";
            document.querySelectorAll(".cat-cardapio a")[0].style.color = "white";
            document.querySelectorAll(".cat-cardapio a span")[0].style.color = "white";

            document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[1].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[1].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[2].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[2].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[3].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[3].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[4].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[4].style.color = "#38250A";

            
        }
        else if(cat=="Bolos"){
            document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "#532D10";
            document.querySelectorAll(".cat-cardapio a")[1].style.color = "white";
            document.querySelectorAll(".cat-cardapio a span")[1].style.color = "white";

            document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[0].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[0].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[2].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[2].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[3].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[3].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[4].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[4].style.color = "#38250A";
        }
        else if(cat=="Sobremesa"){
            document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "#532D10";
            document.querySelectorAll(".cat-cardapio a")[2].style.color = "white";
            document.querySelectorAll(".cat-cardapio a span")[2].style.color = "white";

            document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[1].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[1].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[0].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[0].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[3].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[3].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[4].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[4].style.color = "#38250A";
        }
        else if(cat=="Salgados"){
            document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "#532D10";
            document.querySelectorAll(".cat-cardapio a")[3].style.color = "white";
            document.querySelectorAll(".cat-cardapio a span")[3].style.color = "white";

            document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[1].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[1].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[2].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[2].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[0].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[0].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[4].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[4].style.color = "#38250A";
        }
        else if(cat=="Bebidas"){
            document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor = "#532D10";
            document.querySelectorAll(".cat-cardapio a")[4].style.color = "white";
            document.querySelectorAll(".cat-cardapio a span")[4].style.color = "white";

            document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[1].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[1].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[2].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[2].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[3].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[3].style.color = "#38250A";

            document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor = "#fff";
            document.querySelectorAll(".cat-cardapio a")[0].style.color = "black";
            document.querySelectorAll(".cat-cardapio a span")[0].style.color = "#38250A";
        }
        else{
            document.getElementsByClassName("cat-cardapio")[5].style.backgroundColor = "#532D10";
            document.querySelectorAll(".cat-cardapio a")[5].style.color = "white";
            document.querySelectorAll(".cat-cardapio a span")[5].style.color = "white";
        }
    }
}