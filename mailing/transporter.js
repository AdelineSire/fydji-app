import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const EMAIL_USERNAME = process.env.USERNAME;
const EMAIL_PASSWORD = process.env.PASSWORD;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_HOST = process.env.EMAIL_HOST;

const transporter = nodemailer.createTransport({
	port: EMAIL_PORT,
	secure: EMAIL_HOST,
	host: 'mail.gandi.net',
	auth: {
		user: EMAIL_USERNAME,
		pass: EMAIL_PASSWORD,
	},
});

export default transporter;
