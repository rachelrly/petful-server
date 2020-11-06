const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router
  .route('/')

  .get((req, res) => {
    let pets = Pets.get()

    return res
      .status(200)
      .json(pets)
  })

  .delete(json, (req, res) => {
    removePets('cat')

    return res
      .status(204)
      .end()

  })

module.exports = router
