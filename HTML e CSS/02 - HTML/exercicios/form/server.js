const express = require('express')
const app = express()
const bodyParcer = require('body-parser')

app.use(bodyParcer.urlencoded({ extended: true }))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns usuario incluido!</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns usuario alterado!</h1>')
})

app.listen(3003)