import nodemailer from 'nodemailer';
const GMAIL_USERNAME = process.env.GMAIL_USERNAME;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: GMAIL_USERNAME,
		pass: GMAIL_PASSWORD,
	},
});

export default transporter;
