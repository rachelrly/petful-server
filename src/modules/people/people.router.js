const express = require('express')
const { people } = require('../../store')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router
  .route('/')

  .get((req, res) => {
    let p = People.get()
    if (p.length) {
      return res
        .status(200)
        .json(p)
    }
  })

  .post(json, (req, res) => {

    let { person } = req.body;
    console.log(req.body)
    People.enqueue(person)

    return res
      .status(201)
      .end()
  })

  .delete((req, res) => {
    People.dequeue()

    return res
      .status(204)
      .end()
  })

module.exports = router
