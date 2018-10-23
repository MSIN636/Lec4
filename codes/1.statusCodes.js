var http = require("http");

http.createServer(function(req, res) {
   if (req.url === "/index") {
		res.statusCode = 200;
		res.end("Hello <strong>HTTP</strong>"); 
   } else {  
		res.statusCode = 500; 
		console.log(http.STATUS_CODES[500]); 
		res.end('File Not Found')
  }
}).listen(3000);
