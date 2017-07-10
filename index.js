var express = require('express')
var server = express()
var me = require('./public/me.json')

server.get('/cody', function (request, response) {
    response.json(me)
})

server.get('*', function(request, response){
  response.status(400)
  response.send("Error, Error, Error")
})

server.listen(3000)
