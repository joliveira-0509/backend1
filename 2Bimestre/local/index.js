const express = require('express');//importa um módulo express, que é um framework para construir aplicações//
const app = express();//cria uma instância da aplicação Express

// /define uma rota GET para a raiz di site ('/')
// Quando o caminho '/' for acessado
app.get('/',(req, res) => {
    // Envia a resposta "Hello World!" ao cliente
    let mensagem =( {mensagem: 'Hello World!'});
    res.json(mensagem);
});

// inicia o servidor na porta 8080
app.listen(8080, () => {
    // cria um objeto Date 
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
});
