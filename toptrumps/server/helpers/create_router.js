const { json, Router } = require('express')
const express = require('express')
const ObjectId = require('mongodb').ObjectId

const createRouter = function (collection) {
  const router = express.Router()

  // get all

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })

  // get one

  router.get('/:id', (req, res) => {
    const id = req.params.id
    collection
      .findOne({ _id: ObjectId(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })

  // add one

  router.post('/', (req, res) => {
    const newData = req.body
    collection
      .insertOne(newData)
      .then((result) => {
        res.json(result.ops[0])
      })
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })

  // update one

  router.put('/:id', (req, res) => {
    const id = req.params.id
    const updatedData = req.body
    collection
      .updateOne({ _id: ObjectId(id) }, { $set: updatedData })
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })

  //  delete one

  router.delete('/:id', (req, res) => {
    const id = req.params.id
    collection
      .deleteOne({ _id: ObjectId(id) })
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })

  return router
}

module.exports = createRouter
