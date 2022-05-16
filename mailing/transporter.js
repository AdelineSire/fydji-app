import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
	port: 465,
	secure: true,
	host: 'mail.gandi.net',
	auth: {
		user: USERNAME,
		pass: PASSWORD,
	},
});

export default transporter;
