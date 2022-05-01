import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import createJobs from './createJobs.js';
import createUser from './createUser.js';
import sendSubscriptionEmail from './mailing/sendSubscriptionEmail.js';
import sendJobsEmail from './mailing/sendJobsEmail.js';
import { User, Job } from './models/index.js';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log('Connected to database ');
	})
	.catch((err) => {
		console.error(`Error connecting to the database. \n${err}`);
	});

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/create/jobs', async (req, res) => {
	const dateStr = req.query.date;
	await createJobs(dateStr);
	res.send('New jobs have been created');
});

app.post('/create/user', async (req, res) => {
	const email = req.body.email;
	const isGmail = email.includes('gmail');
	await createUser(email).then(() =>
		res.json({
			success: true,
			isGmail: isGmail,
		})
	);
	sendSubscriptionEmail(email);
});

app.get('/send/jobs', async (req, res) => {
	const newJobs = await Job.find({ sendDate: null });
	const users = await User.find({});
	await sendJobsEmail(newJobs, users);
	const date = new Date();
	for (const newJob of newJobs) {
		newJob.sendDate = date;
		newJob.save();
	}
	console.log('done');
});

app.listen(process.env.PORT || 3000);
