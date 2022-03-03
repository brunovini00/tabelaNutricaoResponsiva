const express = require('express')
const cors = require('cors')
const server = express()
const routes = require('../src/controllers/UserController')

server.use(cors())

server.use(express.json())

server.use(routes)

server.get('/', (req, res) => {
    res.send('oi')
})

server.use((req, res) => {
    res.status(404).send('not found')
})

server.listen(3000, () => {
    console.log('server is running')
})