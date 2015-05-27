var express = require('express'),
app 	= express(),
server 	= require('http').Server(app),
path 	= require('path'),
mysql 	= require('mysql'),
io 		= require('socket.io')(server),
config  = require('./config.json');

server.listen(80)

var connection = mysql.createConnection(config);
connection.connect();

require('./server/socketio-event-handlers')(io, connection);

app.use(express.static(path.resolve(__dirname + './assets/')))

app.get('/app.js', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/assets/app.js'))
})

app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/assets/index.html'))
})
