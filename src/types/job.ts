interface Job {
	toObject(): any;
	title: string;
	url: string;
	keywords: string[];
	salaryStart: number;
	salaryEnd: number;
	company: string;
	city: string;
	source: string;
	sendDate: Date;
}

export default Job;
