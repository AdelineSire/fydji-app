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
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import getYesterdayStr from './lib/getYesterdayStr.js';
import createJobs from './createJobs.js';
import createUser from './createUser.js';
import deleteUser from './deleteUser.js';
import sendJobsEmail from './mailing/sendJobsEmail.js';
import { User, Job } from './models/index.js';
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI && typeof MONGODB_URI === 'string') {
    mongoose
        .connect(MONGODB_URI)
        .then(() => {
        console.log('Connected to database ');
    })
        .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });
}
else {
    console.error('Database URI is missing or is not a string');
}
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// add the public folder in the server (for the newsletter logo)
app.use(express.static('public'));
app.get('/create/jobs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('create jobs request received');
    const dateStr = req.query.date;
    if (dateStr && typeof dateStr === 'string') {
        yield createJobs(dateStr);
    }
    else {
        const yesterdayStr = getYesterdayStr();
        createJobs(yesterdayStr);
    }
    res.send('New jobs have been created');
}));
app.post('/create/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    console.log('email: ', email);
    const isGmail = email.includes('gmail');
    const hasBeenCreated = yield createUser(email);
    res.json({
        success: true,
        isGmail: isGmail,
    });
    console.log('has been created', hasBeenCreated);
    if (hasBeenCreated) {
        console.log('has been created 2');
        const newJobs = yield Job.find().sort({ sendDate: -1 }).limit(3);
        sendJobsEmail(newJobs, 'Découvrez vos 1ères offres Fydji', [{ email }]);
    }
}));
app.get('/unsubscribe/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    deleteUser(email);
    res.send('User unsubscribed');
}));
app.get('/send/jobs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newJobs = yield Job.find({ sendDate: null });
    const users = yield User.find({});
    yield sendJobsEmail(newJobs, 'Les nouvelles offres', users);
    const date = new Date();
    for (const newJob of newJobs) {
        newJob.sendDate = date;
        newJob.save();
    }
    console.log('done');
    res.send('Jobs has been sent');
}));
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
