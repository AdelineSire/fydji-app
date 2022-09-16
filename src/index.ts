import dotenv from 'dotenv';
import mongoose from 'mongoose';

import createServer from './server';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT || 3002;

if (MONGODB_URI && typeof MONGODB_URI === 'string') {
	mongoose
		.connect(MONGODB_URI)
		.then(() => {
			console.log('Connected to database ');

			const app = createServer();

			app.listen(port, () => {
				console.log(`Server is running on port ${port}`);
			});
		})
		.catch((err) => {
			console.error(`Error connecting to the database. \n${err}`);
		});
} else {
	console.error('Database URI is missing or is not a string');
}
