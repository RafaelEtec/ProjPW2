let título = document.querySelector("#titulo");
título.textContent = "Etecia Nutrição e Dietética";
//loop
let pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
    //pegar o peso
    let tdpeso = paciente.querySelector(".info-peso");
    let peso = tdpeso.textContent;

    //pegar a altura
    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let pesoValido = true;
    let alturaValido = true;

    //validar dados
    if (peso <= 0 || peso > 1000) {
        console.error("peso inválido")
        let pesoValido = false;
    }

    if (altura <= 0) {
        console.error("altura inválida")
        let alturaValido = true;
    }
    if (pesoValido && alturaValido) {
        //calcular o IMC
        let imc = peso / altura ** 2;
        console.log(imc);

        //escrever o IMC na tabela
        let tdIMC = paciente.querySelector(".info-imc");
        tdIMC.textContent = imc;
    }
}

