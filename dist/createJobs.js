import { JobRaw, Job } from './models/index.js';
import countKeywords from './countKeywords/index.js';
import extractSalary from './extractSalary/index.js';
import extractHostNameFromUrl from './extractHostNameFromUrl/index.js';
const createJobs = async (dateStr) => {
    const date = new Date(dateStr);
    const rawJobs = await JobRaw.find({ collectDate: { $gt: date } }); // collectedDate > date
    rawJobs.forEach((rawJob) => {
        const tagsString = rawJob.tags.join(' ');
        const strForCountKeywords = `${rawJob.title} ${tagsString} ${rawJob.description}`;
        const keywordObjects = countKeywords(strForCountKeywords);
        if (keywordObjects.length !== 0) {
            const keywords = keywordObjects.map((keywordObject) => keywordObject.keyword);
            if (keywords.includes('react')) {
                const salary = extractSalary(rawJob.salary);
                const url = rawJob.url;
                const source = extractHostNameFromUrl(url);
                const job = {
                    title: rawJob.title,
                    url,
                    keywords: keywordObjects,
                    salaryStart: salary.salaryStart,
                    salaryEnd: salary.salaryEnd,
                    company: rawJob.company,
                    city: rawJob.city,
                    source,
                    sendDate: null,
                };
                const newJob = new Job(job);
                newJob.save().catch((error) => console.log('error', error));
            }
        }
    });
};
export default createJobs;
