var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
if (req.url == '/fileupload') {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.path;
		var filename = files.filetoupload.name.toString();
		var newpath = "./files/" + filename;
		fs.readFile(oldpath, function (err, data) {
			if (err) throw err;
			fs.writeFile(newpath, data, function (err) {
				if (err) throw err;
				res.write('File uploaded and moved!');
				res.end();
			});
			fs.unlink(oldpath, function (err) {
				if (err) throw err;
			});
		});
	});
} else {
		fs.readFile('./html/signup.html', function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
	}
}).listen(3000);
