const express = require("express");
const socket = require('socket.io');


const app = express();
const server = app.listen(3000, ()=>{
    console.log('listening')
})

app.use(express.static('public'));

//socket setup
const io = socket(server);

io.on('connection', (socket)=>{
    console.log('socket', socket.id)

    socket.on('volume', (data)=>{
        //console.log(data);
        io.sockets.emit('volume', data);
    })

    socket.on('play', (data)=>{
        //console.log('play');
        io.sockets.emit('play', data);
    })
});