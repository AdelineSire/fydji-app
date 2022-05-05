import dotenv from "dotenv";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

import Handlebars from "handlebars";

dotenv.config();

const dirname = path.dirname(fileURLToPath(import.meta.url));

const getJobsContent = async (jobs) => {
  const oJobs = jobs.map((j) => j.toObject());
  const templateContent = await getTemplateContent();
  const template = Handlebars.compile(templateContent);
  const html = template({ jobs: oJobs, host: process.env.HOST });
  return html;
};

const getTemplateContent = async () => {
  const templatePath = path.join(dirname, "template", "newsletter.html");

  const templateContent = await fs.readFile(templatePath, "utf8");
  return templateContent;
};

export default getJobsContent;
