const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
require('dotenv').config({ path: __dirname + '/.env' })
var https = require('https');

const app = express();
const nodemailer = require('nodemailer');
var cors = require('cors')
const corsOptions = require('./corsOptions');
app.use(cors(corsOptions));
const args = process.argv.slice(2);
app.use(bodyParser.json());
// Replace the placeholders with your actual email credentials
const our_email = 'info@codebyte.cy'
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true,
    auth: {
        user: our_email,
        pass: 'hackerdeilepoutanasgie'
    },
});

app.get("/verify_captcha/:token", async function(req, res) {
	try {
		const secretKey = '6LfXN6IlAAAAAFy4MUjKAmCHDrihxfVwbKC2BYx7';
		var token = req.params.token;

		console.log('Captcha token',token)

		const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `secret=${secretKey}&response=${token}`
		});

		const data = await response.json();

		res.send({result: data.success});

		if (data.success) {
			// The reCAPTCHA was successful
			console.log('The reCAPTCHA was successful')

		} else {
			// The reCAPTCHA was not successful
			console.log('The reCAPTCHA was not successful')
		}

	} catch (error) {
		console.error(error);
		res.status(500).send({result: "error"});
	}
});


app.post("/send_email", function(req, res) {
  var customer_email = req.body.customer_email;
  var content = req.body.content;
  var language = req.body.language;
	// Mail Options
	let mailOptionsCodeByte
	let mailOptionsCustomer
	if (language=='en'){
		mailOptionsCodeByte = {
		  from: our_email,
		  to: our_email,
		  subject: 'Contact Form',
		  text: content
		};
		mailOptionsCustomer = {
		  from: our_email,
		  to: customer_email,
		  subject: 'CodeByte Ltd - Contact Form Submitted Successfully',
		  text: 'Dear Sir/Madam,\n\nWe would like to kindly thank you for your message. We will get in touch with you shortly.\n\nYours sincerely,\nCodeByte Ltd'
		};
	}else{
		mailOptionsCodeByte = {
		  from: our_email,
		  to: our_email,
		  subject: 'Φόρμα Επικοινωνίας',
		  text: content
		};
		mailOptionsCustomer = {
		  from: our_email,
		  to: customer_email,
		  subject: 'CodeByte Ltd - Η φόρμα επικοινωνίας έχει υποβληθεί επιτυχώς',
		  text: 'Αγαπητέ κύριε/Αγαπητή κυρία,\n\nΕυχαριστούμε πολύ για το μήνυμα σας. Θα επικοινωνήσουμε μαζί σας σύντομα.\n\nΜε εκτίμηση,\nCodeByte Ltd'
		};
	}
	// Send CodeByte Email
	transporter.sendMail(mailOptionsCodeByte, function(error, info) {
	  if (error) {
		console.log(error);
		res.send({result: "failed"});
	  } else {
		console.log('Email sent: ' + info.response);
		res.send({result: "success"});
		// Send Customer Email
		transporter.sendMail(mailOptionsCustomer, function(error, info) {
		  if (error) {
			console.log(error);
		  } else {
			console.log('Email sent: ' + info.response);
		  }
		});
	  }
	});
  
});

var options = {
	key: fs.readFileSync(process.env.SSL_KEY),
	cert: fs.readFileSync(process.env.SSL_CERT)
};
https.createServer(options, app).listen(process.env.PORT, () => {
	console.log(`Server listening on ${process.env.PORT}`);
});