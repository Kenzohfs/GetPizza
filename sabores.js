let saboresAtuais = 0;

function formatarNumeroSabores() {
    let elemento = document.getElementById("numeroSabores");
    let numeroSabores = JSON.parse(localStorage.getItem("PEDIDO")).tamanho.qtdsabores;

    elemento.innerText = saboresAtuais + " / " + numeroSabores;
}

formatarNumeroSabores();