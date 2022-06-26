var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const sendJobsEmail = (jobs, subject = 'Les nouvelles offres', users) => __awaiter(void 0, void 0, void 0, function* () {
    for (const user of users) {
        const content = yield getJobsContent(jobs, user.email);
        sendEmail(user.email, subject, content);
    }
});
export default sendJobsEmail;
