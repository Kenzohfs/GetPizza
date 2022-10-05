function avancarForms(etapaNum) {
    let informacoes, etapa = "";
    switch (etapaNum) {
        case 1:
            window.location.href = "dadosPessoais.html";
            break;
        case 2:
            informacoes = buscarDadosPessoais();
            etapa = "DADOSPESSOAIS";
            window.location.href = "tamanho.html";
            break;
        case 3:
            informacoes = buscarDadosTamanho();
            etapa = "TAMANHO";
            window.location.href = "sabores.html";
            break;
        case 4:
            informacoes = buscarDadosSabores();
            etapa = "SABORES";
            window.location.href = "adicionais.html";
            break;
        case 5:
            informacoes = buscarDadosAdicionais();
            etapa = "ADICIONAIS";
            localStorage.setItem(etapa, JSON.stringify(informacoes));
            informacoes = buscarDadosBebidas();
            etapa = "BEBIDAS";
            window.location.href = "entrega.html";
            break;
        case 6:
            informacoes = buscarDadosEntrega();
            etapa = "ENTREGA";
            localStorage.setItem(etapa, JSON.stringify(informacoes));
            etapa = "PAGAMENTO";
            informacoes = buscarDadosPagamento();
            window.location.href = "confirma.html";
            break;
        case 7:
            informacoes = buscarDadosConfirma();
            break;
    }

    localStorage.setItem(etapa, JSON.stringify(informacoes));
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
    let saboresElements = document.querySelectorAll(".selected-sabor");

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

function buscarDadosEntrega() {
    let radioBox = document.querySelector("input[name='radioEntrega']:checked");
    let preco = 0;
    if (radioBox.id == "checkboxEntrega") {
        let estado = document.getElementById("estado").value;
        let cpf = document.getElementById("cidade").value;
        let email = document.getElementById("endereco").value;
        let cep = document.getElementById("cep").value;
        let numero = document.getElementById("numero").value;
        let complemento = document.getElementById("complemento").value;
        preco = 5;

        return { preco, estado, cpf, email, cep, numero, complemento };
    } else {
        return { preco };
    }
}

function buscarDadosPagamento() {
    let formaPagamento = document.querySelector(".selected-pagamento");

    return JSON.parse(formaPagamento.ariaValueText);
}

function selecionarTamanho(idTamanho) {
    let tamanho = document.getElementById(idTamanho);
    if (tamanho.classList.contains("selected-tamanho")) {
        tamanho.classList.remove("selected-tamanho");
    } else {
        let tamanhoElements = document.querySelectorAll(".tamanho");
        for (let tamanhoElement of tamanhoElements) {
            tamanhoElement.className = "tamanho";
        }
        tamanho.classList.add("selected-tamanho");
    }
}

function selecionarSabor(idSabor) {
    let sabor = document.getElementById(idSabor);
    if (sabor.classList.contains("selected-sabor")) {
        sabor.classList.remove("selected-sabor");
    } else {
        let qtdSabores = JSON.parse(localStorage.getItem("TAMANHO"));
        let saborElementsSelected = document.querySelectorAll(".selected-sabor");
        if (!(saborElementsSelected.length < qtdSabores.qtdsabores)) {
            saborElementsSelected[0].className = "quadradoSabor";
            saborElementsSelected = document.querySelectorAll(".selected-sabor");
        }
        sabor.classList.add("selected-sabor");
    }
}

function selecionarAdicional(idAdicional) {
    let adicional = document.getElementById(idAdicional);
    if (adicional.classList.contains("selected-adicional")) {
        adicional.classList.remove("selected-adicional");
    } else {
        let tamanhoElements = document.querySelectorAll(".quadradoAdicional");
        for (let tamanhoElement of tamanhoElements) {
            tamanhoElement.className = "quadradoAdicional";
        }
        adicional.classList.add("selected-adicional");
    }
}

function selecionarBebida(idBebida) {
    let bebida = document.getElementById(idBebida);
    if (bebida.classList.contains("selected-bebida")) {
        bebida.classList.remove("selected-bebida");
    } else {
        bebida.classList.add("selected-bebida");
    }
}

function selecionarPagamento(idPag) {
    let pagamento = document.getElementById(idPag);
    if (pagamento.classList.contains("selected-pagamento")) {
        pagamento.classList.remove("selected-pagamento");
    } else {
        let pagamentoElements = document.querySelectorAll(".quadradoPagamento");
        for (let pagamentoElement of pagamentoElements) {
            pagamentoElement.className = "quadradoPagamento";
        }
        pagamento.classList.add("selected-pagamento");
    }
}