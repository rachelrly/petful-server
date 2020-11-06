const express = require('express')
const cors = require('cors')

const Queue = require('../queue/Queue')


const q = new Queue;
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.show()

const app = express()

app.use(cors())

app.use('/people', require('../people/people.router'))
app.use('/pets', require('../pets/pets.router'))


app.get('/', (req, res) => {
    res.send('Hello Petful!')
})

module.exports = app
