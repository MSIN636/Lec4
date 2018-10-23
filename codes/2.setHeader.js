var http = require("http");
var server = http.createServer(function(req, res) {
	res.setHeader("Content-Type", "text/html");
	res.write("Hello <strong>HTTP</strong>!");
	res.end();
});
server.listen(3000);
