const { JobRaw, Job } = require('./models');

const countKeywords = require('./countKeywords');
const extractSalary = require('./extractSalary');
const extractHostNameFromUrl = require('./extractHostNameFromUrl');

const getYesterdayStr = () => {
	const DAY_IN_MS = 86400000;
	const dateInMs = new Date().getTime() - DAY_IN_MS;
	const date = new Date(dateInMs);
	return date.toISOString();
};

const createJobs = async (dateStr = getYesterdayStr()) => {
	const date = new Date(dateStr);
	const rawJobs = await JobRaw.find({ collectDate: { $gt: date } }); // collectedDate > date

	rawJobs.forEach((rawJob) => {
		const tagsString = rawJob.tags.join(' ');
		const url = rawJob.url;
		const strForCountKeywords = `${rawJob.title} ${tagsString} ${rawJob.description}`;
		const keywords = countKeywords(strForCountKeywords);
		const salary = extractSalary(rawJob.salary);
		const source = extractHostNameFromUrl(url);

		const job = {
			title: rawJob.title,
			url,
			keywords,
			salaryStart: salary.salaryStart,
			salaryEnd: salary.salaryEnd,
			company: rawJob.company,
			city: rawJob.city,
			source,
			sendDate: null,
		};

		if (keywords.length !== 0) {
			const newJob = new Job(job);
			newJob.save().catch((error) => console.log('error', error));
		}
	});
};

export default createJobs;
