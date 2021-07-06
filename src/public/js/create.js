const pingInterval = 20000;

var socket = io({transports: ["websocket", "polling"], upgrade: false, pingInterval: pingInterval});

socket.on('connect', function(){
    socket.emit('requestDbNames'); //Get database names to display to user
});

socket.on('gameNamesData', function(data){
    var div = document.getElementById('game-list');
    div.innerHTML = "";

    for(var i = 0; i < Object.keys(data).length; i++){
        var button = document.createElement('button');
        
        button.innerHTML = data[i].name;
        button.setAttribute('onClick', "startGame('" + data[i].id + "')");
        button.setAttribute('id', 'gameButton');
        
        div.appendChild(button);
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));
    }
});

function startGame(data){
    window.location.href="/host/" + "?id=" + data;
}

