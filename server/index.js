var express = require('express'),
app 	= require('express')(),
server 	= require('http').Server(app),
path 	= require('path'),
mysql 	= require('mysql'),
io 		= require('socket.io')(server),
config  = require('./config.json');

if (typeof config.connectionLimit === 'undefined') config.connectionLimit = 2;

server.listen(80)
console.log('==> MySQL monitor started.')

var pool  = mysql.createPool(config)
console.log('==> MySQL connection established .')
console.log(__dirname + '/')

// app.use(express.static(path.resolve(__dirname + './')))

app.get('app.js', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/app.html'))
})

app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/index.html'))
})

io.on('connection', function (socket) {
  socket.emit('connected', { success: true });

  sentInterval(function () {
	  
	var rows = pool.query('SELECT * from information_schema.processlist;', function (err, rows) {
	  if (err) throw err
	  return rows;
	})

	socket.emit('show-process-list', rows)

  }, 1000)

});

app.get('/test', function (req, res) {
	setTimeout(function () {
		pool.query('SELECT * from employees.employees LIMIT 1000', function(err, rows) {
		 	if (err) throw err
			res.send(rows)
		})
	}, 5000);
})