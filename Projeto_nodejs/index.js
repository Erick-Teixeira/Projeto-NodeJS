const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post')

//Config express static public
app.use(express.static('public'))

//Config handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Config express
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Rotas 
app.get('/', (req, res) => {
    Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
        res.render('home', { posts: posts })
    })

})

app.get('/cadastro', (req, res) => {
    res.render('formulario')
})

app.post('/data', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send('Houve um erro: ' + err)
        })
})

app.get('/deletar/:id', (req, res) => {
    Post.destroy({ where: { 'id': req.params.id } })
        .then(() => {
            res.send('<p>Registro deletado com sucesso!<br>Redirecionando para a pagina inicial...</p> <meta http-equiv="refresh" content="3;url=/" />')
        })
        .catch((err) => {
            res.send('Erro ao deletar o arquivo: ' + err)
        })
})


//Local 
const host = 'https://localhost:'
const port = 8081

app.listen(port, () => {
    console.log(`Servidor rodando em ${host}${port}`)
})