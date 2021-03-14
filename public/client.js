//make connection
let socket;
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

socket = io.connect('http://localhost:3000');

let player = document.getElementById('player');
//player.muted = true;
//player.autoplay = true;
player.volume = 0.5;
//listen for events
socket.on('volume', function(data){
    //console.log(data.message)
    let roughVol = parseFloat(data.message);
    let mappedVol = roughVol.map(0, 100, 0, 1);
    player.volume = mappedVol;
    console.log(mappedVol)
})

socket.on('play', function(data){
    //console.log('got it');
    player.muted = false;
    player.play();
})