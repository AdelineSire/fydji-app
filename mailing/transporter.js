import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const { EMAIL_PORT, EMAIL_HOST, EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;
const transporter = nodemailer.createTransport({
	port: EMAIL_PORT,
	secure: true,
	host: EMAIL_HOST,
	auth: {
		user: EMAIL_USERNAME,
		pass: EMAIL_PASSWORD,
	},
});

export default transporter;
