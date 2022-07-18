import dotenv from 'dotenv';
import getJobsContent from './getJobsContent.js';
import transporter from './transporter.js';
dotenv.config();
const { EMAIL_USERNAME, EMAIL_HUMAN_NAME } = process.env;
const sendEmail = (email, subject, content) => {
    const mailOptions = {
        from: `${EMAIL_HUMAN_NAME} <${EMAIL_USERNAME}>`,
        to: email,
        subject: subject,
        html: content,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('err in transporter.sendMail: ', err);
        }
        else {
            console.log('info: ', info);
        }
    });
};
const sendJobsEmail = async (jobs, subject = 'Les nouvelles offres', users) => {
    for (const user of users) {
        const content = await getJobsContent(jobs, user.email);
        sendEmail(user.email, subject, content);
    }
};
export default sendJobsEmail;
