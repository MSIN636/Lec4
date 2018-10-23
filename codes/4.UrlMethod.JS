var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res) {
	var q = url.parse(req.url, true);
	var qdata = q.query;        
	if(qdata.first){
			res.setHeader("Content-Type", "text/html");
			res.write("First Name: " +qdata.first+"<br>");
			res.write("Last Name: " +qdata.last+"<br>");
			res.write("email Name: " +qdata.email+"<br>");
			res.end();
		
	}else{
		fs.readFile('./html/form_get.html', function(err, data) {
			if (err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.end("404 Not Found");
			}
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		});
	}
});
server.listen(3000);
