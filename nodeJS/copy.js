var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
   console.log("chunk");
});

readerStream.on('end',function(){
   console.log("end data: "+data);
   copy("copied from input.txt" + data);
   console.log("Copying started");
});

readerStream.on('error', function(err){
   console.log(err.stack);
});
function copy(data){
	var writerStream = fs.createWriteStream('output.txt');

	// Write the data to stream with encoding to be utf8
	writerStream.write(data,'UTF8');

	// Mark the end of file
	writerStream.end();
	console.log("Copying ended");
}
console.log("Program Ended");