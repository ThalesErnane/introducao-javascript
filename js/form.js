
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
 
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente); // array de erros 

    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }


    if(!validaPaciente(paciente)){
        console.log("Paciente inválido");
        return; // sai da function sem adicionar na tabela 
    }



    // pegando o elemento, tabela ()
    var tabela = document.querySelector("#tabela-pacientes");



    tabela.appendChild(pacienteTr); // adicionando o paciente na tabela 

    form.reset(); // apaga todos os campos do form

    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";

});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; // apaga os erros, após add 

    // para cada uten do meu array faça 
    erros.forEach(function(erro) {
    // cria uma li
    var li = document.createElement("li"); 
    li.textContent = erro ; // preenche o valor do erro 
    ul.appendChild(li); // coloca dentro da ul a li criada     
});

}
function obtemPacienteDoFormulario (form){
    var paciente ={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value, 
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
     return paciente;

}

function montaTr(paciente) {
        // cria o tr
        var pacienteTr = document.createElement("tr");  
        pacienteTr.classList.add("paciente");  // criando a class paciente
    
        // cria a td, adicionando o paciente na tabela tr
        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr; 

}

function montaTd (dado,classe){
    var td = document.createElement("td"); // cria a td
    td.textContent = dado; // preenche os valores na td, insere no elemento, extraido do elemente value do form 
    td.classList.add(classe); // cria a class e add 

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}

