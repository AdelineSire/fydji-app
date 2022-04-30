import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

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

app.get('/api/actions/create/jobs', async (req, res) => {
	const dateStr = req.query.date;
	await createJobs(dateStr);
	res.send('New jobs have been created');
});

app.listen(process.env.PORT || 3000);
