function avancarForms(etapaNum) {
    let informacoes;
    switch (etapaNum) {
        case 1:
            window.location.href = "dadosPessoais.html";
            break;
        case 2:
            informacoes = { pedido: buscarDadosPessoais() };
            window.location.href = "tamanho.html";
            break;
        case 3:
            informacoes = { tamanho: buscarDadosTamanho() };
            window.location.href = "sabores.html";
            break;
        case 4:
            informacoes = { sabores: buscarDadosSabores() };
            window.location.href = "adicionais.html";
            break;
        case 5:
            informacoes = { adicionais: buscarDadosAdicionais() };
            informacoes = { bebidas: buscarDadosBebidas() };
            window.location.href = "entrega.html";
            break;
        case 6:
            informacoes = { entrega: buscarDadosEntrega() };
            window.location.href = "confirma.html";
            break;
        case 7:
            informacoes = { confirma: buscarDadosConfirma() };
            window.location.href = "confirma.html";
            break;
    }

    localStorage.setItem("PEDIDO", JSON.stringify(informacoes));
}

function buscarDadosPessoais() {
    let nome = document.getElementById("nomePessoa").value;
    let cpf = document.getElementById("cpfPessoa").value;
    let email = document.getElementById("emailPessoa").value;
    let telefone = document.getElementById("telefonePessoa").value;

    return { nome, cpf, email, telefone };
}

function buscarDadosTamanho() {
    let tamanhoElement = document.querySelector(".selected-tamanho");
    
    return JSON.parse(tamanhoElement.ariaValueText);
}

function buscarDadosSabores() {
    let saboresElements = document.querySelectorAll(".selected-sabores");

    let sabores = [];
    for (let saborElement of saboresElements) {
        sabores.push(JSON.parse(saborElement.ariaValueText));
    }

    return sabores;
}

function buscarDadosAdicionais() {
    let adicional = document.querySelector(".selected-adicional");

    return JSON.parse(adicional.ariaValueText);
}

function buscarDadosBebidas() {
    let bebidaElements = document.querySelectorAll(".selected-bebida");

    let bebidas = [];
    for (let bebida of bebidaElements) {
        bebidas.push(JSON.parse(bebida.ariaValueText));
    }

    return bebidas;
}

function selecionarTamanho(idTamanho) {
    let tamanhoElements = document.querySelectorAll(".tamanho");
    for (let tamanhoElement of tamanhoElements) {
        tamanhoElement.className = "tamanho";
    }
    let tamanho = document.getElementById(idTamanho);
    tamanho.classList.add("selected-tamanho");
}