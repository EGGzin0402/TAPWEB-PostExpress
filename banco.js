const Sequelize = require("sequelize")
const sequelize = new Sequelize("banco","root", "",{
    host: "localhost",
    dialect: "mysql"
})
    
    sequelize.authenticate().then(function () {
        console.log("Servidor do Banco Ativo!")
    }).catch(function(erro){
        console.log("Falha de conexão: "+ erro)
    })



const agendamentos = sequelize.define("agendamentos", {
    nome: { type: Sequelize.STRING},
    endereco: {type: Sequelize.STRING},
    bairro: {type: Sequelize.STRING},
    cep: {type: Sequelize.STRING},
    cidade: {type: Sequelize.STRING},
    estado: {type: Sequelize.STRING},
    observacao: {type: Sequelize.TEXT}
})


// agendamentos.sync({force: true})

var createAgendamento = function(nome, endereco, bairro, cep, cidade, estado, observacao){
    agendamentos.create({
        nome: nome,
        endereco: endereco,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        estado: estado,
        observacao: observacao
    })
}


module.exports = createAgendamento