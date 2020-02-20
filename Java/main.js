let título = document.querySelector("#titulo");
título.textContent = "Etecia Nutrição e Dietética";
//loop
let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function (paciente){
        //pegar o peso
        let peso = paciente.querySelector(".info-peso").textContent;
        
        //pegar a altura
        let tdAltura = paciente.querySelector(".info-altura").textContent;
        let altura = tdAltura 
        
        let pesoValido = true;
        let alturaValido = true;
        
        let tdIMC = paciente.querySelector(".info-imc");
        
        //validar dados
        if (peso <= 0 || peso > 1000) {
            console.error("peso inválido");
            pesoValido = false;
            tdIMC.textContent = "Peso Inválido";
            paciente.classList.add("paciente-invalido");
        }
        paciente.style.color="white"
        paciente.style.backgroundColor="#bcadf0"
        
        if (altura <= 0) {
            console.error("altura inválida");
            alturaValido = true;
            tdIMC.textContent = "altura Inválida";
            paciente.classList.add("paciente-invalido");
        }
        if (pesoValido && alturaValido) {
            //calcular o IMC
            let imc = peso / altura ** 2;
            console.log(paciente);
            
            //escrever o IMC na tabela
            tdIMC.textContent = imc.toFixed(2);
        }
});

let titulo = document.querySelector("#titulo");
titulo.onclick = mostrarMensagem;

function mostrarMensagem(){
    console.log("Evento aconteceu");
}
function trocarCor(){
    let corUm = parseInt(Math.random()*255);
    let corDois = parseInt(Math.random()*255);
    let corTres = parseInt(Math.random()*255);
    titulo.style.color = "rgb(" +corUm+ "," +corDois+ "," +corTres+ ")";
}
        
        
        
        
        
        