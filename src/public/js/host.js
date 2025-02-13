const pingInterval = 20000;

var socket = io({transports: ["websocket", "polling"], upgrade: false, pingInterval: pingInterval});
var params = jQuery.deparam(window.location.search);

//When host connects to server
socket.on('connect', function() {

    document.getElementById('players').value = "";
    
    //Tell server that it is host connection
    socket.emit('host-join', params);
});

socket.on('showGamePin', function(data){
   document.getElementById('gamePinText').innerHTML = data.pin;

   let url = document.location.protocol + "//" + document.location.host + "?pin=" + data.pin;
   var qr = new QRious({
       element: document.getElementById("qr"),
       size: 300,
       value: url
   });
   var anchor = document.getElementById("gameanchor");
   anchor.text = url;
   anchor.href = url;
});

//Adds player's name to screen and updates player count
socket.on('updatePlayerLobby', function(data){
    
    document.getElementById('players').value = "";
    
    for(var i = 0; i < data.length; i++){
        document.getElementById('players').value += data[i].name + "\n";
    }
    
});

//Tell server to start game if button is clicked
function startGame(){
    socket.emit('startGame');
}
function endGame(){
    window.location.href = "/";
}

//When server starts the game
socket.on('gameStarted', function(id){
    console.log('Game Started!');
    window.location.href="/host/game/" + "?id=" + id;
});

socket.on('noGameFound', function(){
   window.location.href = '../../';//Redirect user to 'join game' page
});

