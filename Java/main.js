let título = document.querySelector("#titulo");
título.textContent = "Etecia Nutrição e Dietética";

//pegar o peso
let paciente = document.querySelector(".paciente");
let tdpeso = paciente.querySelector(".info-peso");
let peso = tdpeso.textContent;

//pegar a altura
let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

//calcular o IMC
let imc = peso / altura ** 2;
console.log(imc);

//escrever o IMC na tabela
let tdIMC = paciente.querySelector(mc")
tdIMC.textContent = imc;