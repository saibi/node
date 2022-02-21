const nodemailer = require('nodemailer');

const email = {
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
	user: "36760ddc6c81b5",
	pass: "0f7ded3aea593b"
	}
};

const send = async(option) => {
	nodemailer.createTransport(email).sendMail(option, (error, info) => {
		if ( error ) {
			console.log(error);
		} else {
			console.log(info);
			return info.response;
		}
	});
};


let email_data = {
	from: 'huvitz.kimyoungmin@gmail.com',
	to: 'huvitz.kimyoungmin@gmail.com',
	subject: 'test email using mailtrap',
	text: 'nodejs nodemailer'
};


send(email_data);
