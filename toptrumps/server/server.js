const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js')

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('toptrumps')
    const simpsonsCollection = db.collection('simpsonsTopTrumps')
    const toptrumpsRouter = createRouter(simpsonsCollection)
    app.use('/api/toptrumps/', toptrumpsRouter)
  })
  .catch(console.err)

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`)
})
