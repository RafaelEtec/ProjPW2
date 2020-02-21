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
let botao = document.querySelector("#botao-cadastrar");

botao.addEventListener("click", function (evento){
    evento.preventDefault();

    let formulario = document.querySelector("#form-paciente");
    let nome = formulario.nome.value;
    let peso = formulario.peso.value;
    let altura = formulario.altura.value;
    let gordura = formulario.gordura.value;
    console.log(nome, peso, altura, gordura);

    let table = document.querySelector("#tabela-pacientes");
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

    let tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tr.appendChild(tdNome)
    
    let tdPeso = document.createElement("td");
    tdPeso.textContent = peso;
    tr.appendChild(tdPeso)

    let tdAltura = document.createElement("td");
    tdAltura.textContent = altura;
    tr.appendChild(tdAltura)

    let tdGordura = document.createElement("td");
    tdGordura.textContent = gordura;
    tr.appendChild(tdGordura)

    table.appendChild(tr)

    console.log(tr)
    
});