var express = require('express')
var app = express();

const http = require('http');
const server = require('http').Server(app);
const io = require('socket.io')(server);
// const PORT = process.end.PORT || 8000;

const defURL = "http://localhost:8000/"

app.set("view engine", "ejs");

app.use(express.static('public'));

app.get('/vote', function(req, res) {
    res.render('pages/vote', {socketURL:defURL});
  });

app.get('/result', function(req, res) {
    res.render('pages/result', {socketURL:defURL});
  });

io.sockets.on('connection', function(socket){
	socket.on('vote_meowy', function(vote){
	io.emit('vote_meowy', vote);
	});

	socket.on('vote_doggo', function(vote){
	io.emit('vote_doggo', vote);
	});
});
server.listen(8000);
console.log("server is listening on port: 8000");


