var botaoAdicionar = document.querySelector("#buscar-paciente");


// fazendo requisição assincrona utilizando Ajax
botaoAdicionar.addEventListener("click", function(){
    console.log("Buscar Paciente");

   var xhr = new XMLHttpRequest();

   xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // abre a conexão com api 


    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            console.log(typeof resposta); // texto em String
            console.log(resposta);
   
   
           var pacientes = JSON.parse(resposta);
   
           pacientes.forEach(function(paciente){
               adicionaPacienteNaTabela(paciente); // adicionando cada paciente na tabela 
   
            });
        
        } else {
            console.log(xhr.status); // apresenta erro ao não encontrar a requisição 
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }



     
            
        });
        xhr.send();
    });


