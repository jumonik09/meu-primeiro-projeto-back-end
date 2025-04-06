const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request,response) {
    response.json({
        nome: "Nanã",
        imagem: "teste da ju",
        minibio: "Orixá Nana Buruquê – Trono Feminino da Evolução",
    })

}


function mostraPorta() {
    console.log ("Servidor criado e rodado na porta", porta)
}


app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta)