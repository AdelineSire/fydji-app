import express from 'express';
import cors from 'cors';
import routes from './routes';

function createServer() {
	const app = express();
	app.use(cors());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(express.static('public'));
	app.use('/', routes);
	return app;
}

export default createServer;
