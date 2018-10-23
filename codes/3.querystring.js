var http = require('http');
var fs = require('fs');
const { parse } = require('querystring');

var server = http.createServer(function(req, res) {
	if(req.method=="POST"){
		var body = '';
		req.on('data', function(chunk){
           body += chunk.toString();
		});
		req.on('end', function(){
			var first_name=parse(body).first;
			var last_name=parse(body).last;
			var email=parse(body).email;
			res.setHeader("Content-Type", "text/html");
			res.write("First Name: " +first_name+"<br>");
			res.write("Last Name: " +last_name+"<br>");
			res.write("email Name: " +email+"<br>");
			res.end();
		});
		
	}else{
		fs.readFile('./html/form.html', function(err, data) {
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
