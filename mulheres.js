const express = require("express")
const router= express.Router()

const app = express()
const porta = 3333


const mulheres = [
    {
        nome: "Nanã",
        imagem: "teste da ju",
        minibio: "Orixá Nana Buruquê – Trono Feminino da Evolução" ,
    },

    {
        nome: "Clarice Lispector",
        imagem: "teste da ju2",
        minibio: "Escritora",
    },

    {
        nome: "Angela Davis",
        imagem: "teste da ju 3",
        minibio: "militante negra norte-americana ",
    }
]


function mostraMulheres(request,response){
    response.json(mulheres)

}

function mostraPorta() {
    console.log ("Servidor criado e rodado na porta", porta)
}


app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)

