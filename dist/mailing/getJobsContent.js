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
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Handlebars from 'handlebars';
dotenv.config();
const API_URL = process.env.API_URL;
const HOST = process.env.HOST;
const dirname = path.dirname(fileURLToPath(import.meta.url));
const getTemplateContent = () => __awaiter(void 0, void 0, void 0, function* () {
    const templatePath = path.join(dirname, 'template', 'newsletter.handlebars');
    const templateContent = yield fs.readFile(templatePath, 'utf8');
    return templateContent;
});
const getJobsContent = (jobs, email) => __awaiter(void 0, void 0, void 0, function* () {
    const oJobs = jobs.map((j) => j.toObject());
    const templateContent = yield getTemplateContent();
    const template = Handlebars.compile(templateContent);
    const html = template({
        jobs: oJobs,
        host: HOST,
        apiUrl: API_URL,
        email: email,
    });
    return html;
});
export default getJobsContent;
