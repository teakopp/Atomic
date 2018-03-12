
const http = require("http")
const MongoClient = require('mongodb').MongoClient;
const hostname = '127.0.0.1'
const port = 3000
const express = require('express')
const app = express()
const cors = require('cors')
const url = 'mongodb://localhost:27017/atomic'

app.use(cors())

app.get("/", (req, res) => {

  MongoClient.connect(url, (err, client) => {
    let db = client.db('atomic')

    db.collection('players').find().toArray( (req, result) => {
       if (err) throw err
       res.send(result)
       console.log('Get on port 3000');
     })
  });
})

app.listen(3000, () => {
  console.log('Listening on port 3000...');
})
