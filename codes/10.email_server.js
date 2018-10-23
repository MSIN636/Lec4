var http = require('http');
var url = require('url');
var fs = require('fs');
var nodemailer = require('nodemailer');


http.createServer(function (req, res) {
	var q = url.parse(req.url, true).query;   
	if(q.contact=="email"){
		var name =q.name; 
		var email =q.email;   
		var mobile =q.mobile;   
		var subject = q.subject;
		var message = q.message;
		var mailOptions = {
			from: '',
			to: email,
			subject: subject,
			text: message
		};
	    mailsender(mailOptions);
		
		res.end('Your Email has been Send');
	}
	else{

		var filename = "./html/contact_email.html";
		fs.readFile(filename, function(err, data) {
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



function mailsender(mailoptions){
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'touro.msin.636@gmail.com',
			pass: 'tourocollege'
		}
	});

	transporter.sendMail(mailoptions, function(error, info){
		if (error) { console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
}

