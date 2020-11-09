require('dotenv').config()

const config = require('../../config')
const express = require('express')
const cors = require('cors')
const { cats, dogs, both } = require('../pets/pets.router')
const people = require('../people/people.router')

const Queue = require('../queue/Queue')

const app = express()

app.use(cors())

app.use('/api/people', people)
app.use('/api/pets', both)
app.use('/api/cats', cats)
app.use('/api/dogs', dogs)


app.get('/', (req, res) => {
    res.send('Hello Petful!')
})

module.exports = app
