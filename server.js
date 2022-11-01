const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
	
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/pedido/dadosPessoais.html"));
});

app.get("/size", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/pedido/tamanho.html"));
});

app.get("/flavours", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/pedido/sabores.html"));
});

app.get("/additionals", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/pedido/adicionais.html"));
});

app.get("/delivery", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/pedido/entrega.html"));
});

app.get("/confirmation", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/pedido/confirma.html"));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});