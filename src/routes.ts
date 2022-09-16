import express from 'express';

import getYesterdayStr from './lib/getYesterdayStr.js';
import createJobs from './createJobs.js';
import createUser from './createUser.js';
import deleteUser from './deleteUser.js';
import sendJobsEmail from './mailing/sendJobsEmail.js';
import { User as UserModel, Job as JobModel } from './models/index.js';
import Job from './types/job';
import User from './types/user';

const router = express.Router();

router.get('/create/jobs', async (req, res) => {
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

router.post('/create/user', async (req, res) => {
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
		const newJobs = (await JobModel.find()
			.sort({ sendDate: -1 })
			.limit(3)) as Job[];
		sendJobsEmail(newJobs, 'Découvrez vos 1ères offres Fydji', [{ email }]);
	}
});

router.get('/unsubscribe/:email', async (req, res) => {
	const email = req.params.email;
	deleteUser(email);
	res.send('User unsubscribed');
});

router.get('/send/jobs', async (req, res) => {
	// getJobsToSend
	const newJobs = await JobModel.find({ sendDate: null });
	const users = (await UserModel.find({})) as User[];
	await sendJobsEmail(newJobs as Job[], 'Les nouvelles offres', users);
	const date = new Date();
	// markAsSent
	for (const newJob of newJobs) {
		newJob.sendDate = date;
		newJob.save();
	}
	console.log('done');
	res.send('Jobs has been sent');
});

export default router;
