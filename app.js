var OBS = require('./index.js');
var monkey = require('node-monkey')();
monkey.attachConsole()
//require('node-monkey').start();
var ws = new OBS.OBSWebSocket();
//require('./src/obs-requests.js');
//OBSSource
//{ "name" : "Jack", "age" : 27 }

  // Bind some listeners by assigning functions, with params if applicable.
  ws.onConnectionOpened = function() {
    //console.log('Connection Opened');

    // Send some requests by calling existing functions and passing callbacks.
    //ws.toggleStreaming();
    //ws.setCurrentScene("Scene");
    ws.getVersion( function(msg) {
    	console.log("huh " + msg)
    })

    // ws.getCurrentScene( function(err, data) {
    // 	console.log("huh " + JSON.stringify(data))
    // })
    //ws.setCurrentScene("scene");
  };

  // Open the connection and Authenticate if needed. URL defaults to localhost:4444
  ws.connect(); // ws.connect('url', 'password');