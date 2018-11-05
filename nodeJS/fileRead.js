var fs  = require("fs");
//Asynchronous Read
fs.readFile("input.txt", function(err, data){
	if(err)
		console.log(err);
	console.log("Asynchronous Read: "+data.toString());
});

//Synchronous Read
var data  = fs.readFileSync("input.txt");
console.log("Synchronous Read : "+data.toString());
console.log("program ended");