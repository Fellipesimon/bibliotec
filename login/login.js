
//var nome = "késsia"
//const nome = "késsia" 
//let nome = "késsia"

//console.log(nome);

//nome = "Gustavo"
//console.log(nome);

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha")



console.log(campoSenha.type)

btnSenha.addEventListener("click",function() {

    //  if(campoSenha.type == "password") {
    //     campoSenha.type = "text";
    //  }
    //  else {
    //     campoSenha.type = "password";
    //  }

    // campoSenha== senha, se senha for == senha (?), mostra o texto se nao (:) vira senha

    campoSenha.type = campoSenha.type == "password" ? "texto" : "password"

})

