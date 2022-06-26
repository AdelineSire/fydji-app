import mongoose from 'mongoose';
const jobSchema = new mongoose.Schema({
    title: String,
    url: String,
    keywords: [],
    salaryStart: Number,
    salaryEnd: Number,
    company: String,
    city: String,
    source: String,
    sendDate: Date,
});
const Job = mongoose.model('Job', jobSchema);
export default Job;
