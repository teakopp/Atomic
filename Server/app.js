
const http = require("http")
const MongoClient = require('mongodb').MongoClient;
const hostname = '127.0.0.1'
const port = 3000
const express = require('express')
const app = express()


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text-plain');
  res.end('Hello World\n');

  MongoClient.connect('mongodb://localhost:27017/Atomic', function(err, db) {
  // If a database called "myNewDatabase" exists, it is used, otherwise it gets created.

  let collection = db.collection('characters');
    // If a collection called "myNewCollection" exists, it is used, otherwise it gets created.
  });

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
