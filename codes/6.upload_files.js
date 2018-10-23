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
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
	res.write('<input type="file" name="filetoupload"><br>');
	res.write('<input type="submit">');
	res.write('</form>');
	res.end();
}
}).listen(3000);
