const express = require('express')
const json = require('body-parser').json()
const xss = require('xss');
const Pets = require('./pets.service')

const both = express.Router()
const cats = express.Router()
const dogs = express.Router()



cats
  .route('/')

  .get((req, res) => {
    const cat = Pets.cats();
    return res
      .status(200)
      .json(cat)
  })

  .delete((req, res) => {
    Pets.dequeue('cat')
    return res
      .status(204)
      .send(`Cat was deleted`)
  })

dogs
  .route('/')

  .get((req, res) => {
    const dog = Pets.dogs()
    return res
      .status(200)
      .json(dog)
  })

  .delete((req, res) => {
    Pets.dequeue('dog')
    return res
      .status(204)
      .send(`dog was deleted`)
  })


both
  .route('/')

  .get((req, res) => {
    let pets = Pets.get()

    return res
      .status(200)
      .json(pets)
  })

module.exports = {
  both,
  cats,
  dogs
}
