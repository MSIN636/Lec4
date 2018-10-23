var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'touro.msin.636@gmail.com',
        pass: 'tourocollege'
    }
});

var att ='@txt.att.net';
var boost = '@myboostmobile.com';
var tmobil ='@tmomail.net';
var cellular = '@email.uscc.net';
var verizon ='@vtext.com';
var vergin = '@@vmobl.com';
var sprint = '@messaging.sprintpcs.com';
var metro= '@mymetropcs.com';


var mailOptions = {
    from: 'alfred@yahoo.com',
    to: '0123456789'+sprint,
    subject: 'any',
    text: 'That was easy!'
};



transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

