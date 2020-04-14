var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    //console.log(event.target); // quem foi clicado 
    if (event.target.tagName == 'TD'){
        
    event.target.parentNode.classList.add("fadeOut");
   
    setTimeout( function() {

  
        // remove após meio segundo
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remove
        // OR event.target.parentNode.remove(); 
    
        paiDoAlvo.remove(); // remove a linha
        
    }, 500);

    }
});

/*
pacientes.forEach(function(paciente) {
    // evento de duplo click
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo click.");
        this.remove(); // removendo o cliente 

    });
});

*/

