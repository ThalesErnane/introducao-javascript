
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


