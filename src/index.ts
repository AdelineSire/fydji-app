import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import getYesterdayStr from './lib/getYesterdayStr.js';
import createJobs from './createJobs.js';
import createUser from './createUser.js';
import deleteUser from './deleteUser.js';
import sendJobsEmail from './mailing/sendJobsEmail.js';
import { User as UserModel, Job as JobModel } from './models/index.js';
import Job from './types/job';
import User from './types/user';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI && typeof MONGODB_URI === 'string') {
	mongoose
		.connect(MONGODB_URI)
		.then(() => {
			console.log('Connected to database ');
		})
		.catch((err) => {
			console.error(`Error connecting to the database. \n${err}`);
		});
} else {
	console.error('Database URI is missing or is not a string');
}

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add the public folder in the server (for the newsletter logo)
app.use(express.static('public'));

app.get('/create/jobs', async (req, res) => {
	console.log('create jobs request received');
	const dateStr = req.query.date;
	if (dateStr && typeof dateStr === 'string') {
		await createJobs(dateStr);
	} else {
		const yesterdayStr = getYesterdayStr();
		createJobs(yesterdayStr);
	}

	res.send('New jobs have been created');
});

app.post('/create/user', async (req, res) => {
	const email = req.body.email;
	console.log('email: ', email);
	const isGmail = email.includes('gmail');
	const hasBeenCreated = await createUser(email);
	res.json({
		success: true,
		isGmail: isGmail,
	});
	console.log('has been created', hasBeenCreated);
	if (hasBeenCreated) {
		console.log('has been created 2');
		// getLastSentJobs
		const newJobs = await JobModel.getLastSentJobs();
		sendJobsEmail(newJobs, 'Découvrez vos 1ères offres Fydji', [{ email }]);
	}
});

app.get('/unsubscribe/:email', async (req, res) => {
	const email = req.params.email;
	deleteUser(email);
	res.send('User unsubscribed');
});

app.get('/send/jobs', async (req, res) => {
	// getJobsToSend
	const newJobs = await JobModel.getJobsToSend();
	const users = (await UserModel.find({})) as User[];
	await sendJobsEmail(newJobs, 'Les nouvelles offres', users);
	const date = new Date();
	// markAsSent
	await JobModel.markAsSent();
	console.log('done');
	res.send('Jobs has been sent');
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
