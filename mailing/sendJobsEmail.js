import transporter from './transporter.js';
const GMAIL_USERNAME = process.env.GMAIL_USERNAME;

const sendJobsEmail = async (jobs, users) => {
	const extractedContent = jobs.map((job) => {
		const keywordsArray = job.keywords;
		const keywords = keywordsArray.map((keyword) => keyword.keyword).join(', ');
		console.log('keywords', keywords);
		return `<h1>${job.title}</h1><p>${keywords}</p>`;
	});
	const content = extractedContent.join();
	console.log(content);

	const sendEmail = (email, content) => {
		const mailOptions = {
			from: GMAIL_USERNAME,
			to: email,
			subject: 'Les nouvelles offres',
			html: content,
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.log('err in transporter.sendMail: ', err);
			} else {
				console.log('info: ', info);
			}
		});
	};

	for (const user of users) {
		sendEmail(user.email, content);
	}
};

export default sendJobsEmail;
