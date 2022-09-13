import mongoose from 'mongoose';

const jobRawSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	date: String,
	collectDate: Date,
	company: String,
	city: String,
	salary: {
		type: String,
		required: true,
	},
	contract: String,
	tags: [String],
	description: String,
});
const JobRaw = mongoose.model('JobRaw', jobRawSchema);
export default JobRaw;
