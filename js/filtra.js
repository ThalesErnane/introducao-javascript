var campoFiltro = document.querySelector("#filtrar-tabela");

// evento ao digitar no campo input 
campoFiltro.addEventListener("input", function(){

    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente"); // retorna todos os pacientes
 
    if (this.value.length > 0 ) {

        for(var i = 0; i < pacientes.length ; i++ ){
            var paciente = pacientes[i]; // a cada iteração recebe o cliente 
            var tdNome = paciente.querySelector(".info-nome"); // procura o paciente pelo nome
            var nome = tdNome.textContent; // recebe o nome do paciente 
            var expressao = new RegExp(this.value, "i");

           if ( !expressao.test(nome)){ // verifica se na expessa regular tem pelo menos um caractere na var nome
                paciente.classList.add("invisivel"); //se for diferente adiciona a class invisivel
           } else {
               paciente.classList.remove("invisivel"); // remove a class invisivel 
           }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});