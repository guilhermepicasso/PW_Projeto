//Tratando Route Params
const express = require('express');
const server = express();
server.use(express.json())
//localhost:8080/UserLogin/2      //Lista um unico prato
//localhost:8080/ //Listatodos os pratos
//localhost:8080/UserLogin/2    //alterar um prato


const usuario = [];


const login = [
    {user: "admin", senha:"123"}
    
]



//Rota para listar um usuario 
server.get('/UserLogin/:indiceInput', (req, res) => {
const { indiceInput } = req.params
return res.json({ user: `O ID dO user foi... ${login[indiceInput]}` })
})

//Rota para listar TODOS os usuarios
server.get('/UserLogin', (req, res) => {
return res.json(login);
})

//Rota para criar novo usuario - POST - utilizar REQUST BODY
server.post('/UserLogin', (req, res) => {
const { newUser } = req.body;
login.push(newUser);
return res.json(login);
})

//Rota para alterar usuario - PUT - será utilizado BODY
server.put('/UserLogin/:indice', (req, res) => {
const { indice } = req.params;
const { newUser } = req.body;
login[indice]=newUser;
return res.json(login);
})

//Rota para deletar prato - DELETE -
server.delete('/UserLogin/:indice', (req, res) => {
const { indice } = req.params;
login.splice(indice,1);
return res.json(login);
})
server.listen(8080);