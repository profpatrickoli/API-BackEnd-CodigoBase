// npm init -> inicia a API
// npm i express -> biblioteca do express
const express = require("express")
const app = express()
const port = 3002
app.use(express.json())

const db = require("./db")

const usuarios = []

app.post("/usuarios", (req, res)=>{
  const usuario = req.body
  usuarios.push(usuario)
  res.send("Usuário cadastrado com sucesso!")
})
app.get("/usuarios", (req, res)=>{
  res.send(usuarios)
})

app.listen(port, ()=>{
  console.log("API RODANDO NA PORTA" + port)
})