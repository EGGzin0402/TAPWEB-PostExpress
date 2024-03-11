const express = require("express")
const app = express()

var sequelize = require(__dirname+"/banco.js")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

var porta = 8081

app.listen(porta, function(){
    console.log("Servidor Ativo!")
    console.log("Rodando na porta "+porta)
})

app.get("/", function(req, res){
    res.sendFile(__dirname+"/src/index.html")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res){
    sequelize(req.params.nome, req.params.endereco, req.params.bairro, req.params.cep, req.params.cidade, req.params.estado, req.params.observacao)
    res.send("Cadastro feito")
})

app.post("/cadastrar", function(req, res){
    sequelize(req.body.nome, req.body.endereco, req.body.bairro, req.body.cep, req.body.cidade, req.body.estado, req.body.observacao)
    res.send("Cadastro Feito")
})
