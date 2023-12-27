import express from 'express'

const routes = express.Router()

// Lista todos os filmes na home
routes.get("/list")
// Rota pra pesquisar
routes.get("list/:posicao")
routes.get('/list/:nome')
routes.get('/lsit/:genero')
routes.get('/list/:ano')

// Rota para adicionar um filme
routes.post('/add')

// rotas para editar
routes.put('/edit/:posicao')

// Rota para deletar filme
routes.delete('/delete/:posicao')


export default routes