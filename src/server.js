const express = require('express')
const http = require('http')
const path = require('path')
const socketIo = require('socket.io')
const cors = require('cors')
const ModelRouter = require('./modules/index.js')


const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname,'./uploads')))
app.use(cors())
app.use(ModelRouter)



// const server = http.createServer(app)


// const io = socketIo(server)

// io.on('connection',() =>{
//     console.log('new connect')
// })

app.listen(process.env.PORT || 5000, () => console.log('server active......'))

