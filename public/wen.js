//make connection
let socket;

socket = io.connect('http://localhost:3000');

let slider = document.getElementById('slider');
let button = document.getElementById('button');
//emit events
slider.addEventListener('change', ()=>{
    //console.log(slider.value);
    socket.emit('volume', {
        message: slider.value
    })
})

button.addEventListener('click', ()=>{
    socket.emit('play', {
        message: 'on'
    })
})


