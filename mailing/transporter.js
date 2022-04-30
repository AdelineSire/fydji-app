import nodemailer from 'nodemailer';
const { GMAIL_USERNAME, GMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: GMAIL_USERNAME,
		pass: GMAIL_PASSWORD,
	},
});

export default transporter;
