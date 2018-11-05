var http = require( "http");
var fs = require("fs");
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end("Hello World\n");
}).listen(8081);
var input  = fs.readFileSync('input.txt');
console.log(input.toString());

fs.readFile('inputnew.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
console.log(__filename);
/*
*
*
//events code started
*
*
*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");


console.log("server is running at 127.0.0.1:8081");
