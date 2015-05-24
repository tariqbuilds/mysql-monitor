module.exports = function(io, connection) {

    io.on('connection', function (socket) {
		
		socket.emit('connected', { success: true })

    	connection.query('SHOW VARIABLES;', function (err, rows) {
    		socket.emit('show-system-variables', rows)
		})

		var processList = 'SELECT * FROM information_schema.processlist WHERE ID <> ? ;'
		var connectionID;  

		connection.query('SELECT CONNECTION_ID() as connection_id;', function (err, rows) {
			connectionID = rows[0].connection_id;
		})

		setInterval(function () {
			
			connection.query(processList, [connectionID], function (err, rows) {
			  	if (err) throw errs
		  		socket.emit('show-process-list', rows)
			})

		  }, 1000)
		
	});
};