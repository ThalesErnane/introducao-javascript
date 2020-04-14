
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

    var pesoEhValido = validaPeso(peso); // chama a function valida peso passando como argumento o peso, retorna true or false
    var alturaEhValido = validaAltura(altura); // chama a function valida altura passando como argumento o peso, retorna true or false

    // entra no if se peso for inválido
if(!pesoEhValido){
    console.log("Peso Inválido");
    pesoEhValido = false; 
    tdImc.textContent = "Peso Inválido"; 
    // adicionando uma style por uma class 
    paciente.classList.add("paciente-invalido");

}

if (!alturaEhValido) {
    console.log("Altura Inválida");
    alturaEhValido = false;
    tdImc.textContent = "Altura Inválida";
    // manipulando o style no css 
    paciente.style.backgroundColor = "red"; // coloca a cor da linha vermelho
    paciente.style.color = "white";
}

if ( alturaEhValido && pesoEhValido ){
    var imc = calculaImc(peso,altura); // 100 / 2.0 * 2.0  chama a função
    tdImc.textContent = imc; 
    console.log(imc); 

} /*else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
*/
}
// alert(tdImc.textContent);    


// função calcula imc
function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2); // atribui o conteudo da variável imc para tdImc
};


function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}