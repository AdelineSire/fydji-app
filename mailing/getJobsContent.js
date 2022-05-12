import dotenv from 'dotenv';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import Handlebars from 'handlebars';

dotenv.config();
const API_URL = process.env.API_URL;
const HOST = process.env.HOST;
const dirname = path.dirname(fileURLToPath(import.meta.url));

const getJobsContent = async (jobs) => {
	const oJobs = jobs.map((j) => j.toObject());
	const templateContent = await getTemplateContent();
	const template = Handlebars.compile(templateContent);
	const html = template({ jobs: oJobs, host: HOST, apiUrl: API_URL });
	return html;
};

const getTemplateContent = async () => {
	const templatePath = path.join(dirname, 'template', 'newsletter.handlebars');

	const templateContent = await fs.readFile(templatePath, 'utf8');
	return templateContent;
};

export default getJobsContent;
