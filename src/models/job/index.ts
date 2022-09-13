import dao from './dao.js';
import IJob from '../../types/job';

// class Job {
// 	async getLastSentJobs() {
// 		const newJobs = (await dao
// 			.find()
// 			.sort({ sendDate: -1 })
// 			.limit(3)) as IJob[];
// 		return newJobs;
// 	}
// 	async getJobsToSend() {
// 		return (await dao.find({ sendDate: null })) as IJob[];
// 	}

// 	async markAsSent() {
// 		const newJobs = await dao.find({ sendDate: null });
// 		const date = new Date();
// 		for (const newJob of newJobs) {
// 			newJob.sendDate = date;
// 			newJob.save();
// 		}
// 	}
// }

// export default new Job();

const Job = {
	async getLastSentJobs() {
		const newJobs = (await dao
			.find()
			.sort({ sendDate: -1 })
			.limit(3)) as IJob[];
		return newJobs;
	},
	async getJobsToSend() {
		return (await dao.find({ sendDate: null })) as IJob[];
	},
	async markAsSent() {
		const newJobs = await dao.find({ sendDate: null });
		const date = new Date();
		for (const newJob of newJobs) {
			newJob.sendDate = date;
			newJob.save();
		}
	},
};

export default Job;
