const express = require('express')
const http = require('http')
const path = require('path')
const cors = require('cors')
const {Server} = require('socket.io')
const ModelRouter = require('./modules/index.js')


const app = express()
app.use(cors( ))
app.use(express.json())
app.use(express.static(path.join(__dirname,'./uploads')))

app.use(ModelRouter)


const users = require('./modules/cards/model.js')
const server = http.createServer(app)


const io = new Server(server, {
    cors: {
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection',async (socket) => {
    socket.emit('users', fetchAll())
  });

server.listen(process.env.PORT || 5000, () => console.log('server active......'))

