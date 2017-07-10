const express = require('express')
const server = express()
const me = require('./public/me.json')
const port = process.env.PORT || 8080
server.get('/cody', function (request, response) {
    response.json(me)
})

server.get('*', function(request, response){
  response.status(400)
  response.send("Error, Error, Error")
})

server.listen(port)
