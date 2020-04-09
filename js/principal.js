
var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";


/*
    var gordura = paciente.querySelector(".info-gordura").textContent;

*/

var pacientes = document.querySelectorAll(".paciente");

console.log("Tamanho do Array " + pacientes.length);

for(var i = 0; i <  pacientes.length; i++ ){
    
   // var paciente = document.querySelector("#primeiroPaciente");

    var paciente = pacientes[i]; // 

    var tdPreso = paciente.querySelector(".info-peso");
    var peso = tdPreso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValido = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso Inválido");
    pesoEhValido = false; 
    tdImc.textContent = "Peso Inválido"; 
    // adicionando uma style por uma class 
    paciente.classList.add("paciente-invalido");

}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura Inválida");
    alturaEhValido = false;
    tdImc.textContent = "Altura Inválida";
    // manipulando o style no css 
    paciente.style.backgroundColor = "red"; // coloca a cor da linha vermelho
    paciente.style.color = "white";
}

if ( alturaEhValido && pesoEhValido ){
    var imc = peso / (altura  * altura); // 100 / 2.0 * 2.0 
    tdImc.textContent = imc.toFixed(2); // atribui o conteudo da variável imc para tdImc
    console.log(imc); 
} /*else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
*/
}
// alert(tdImc.textContent);    



function mostraMensagem( ){
    console.log("Olá eu fui clicado !");
};

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    // pega os valores da tela 
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    // cria as td 
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td"); 
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // preenche os valores na td
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // adicionando na tr

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);


    // pegando o elemento, tabela ()
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr); // adiciona na tabela 


    /*
    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);
    */

});


console.log(botaoAdicionar);