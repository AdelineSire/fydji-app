import { User } from './models/index.js';

const createUser = async (email: string) => {
	const exists = (await User.find({ email: email }).count()) > 0;
	if (exists === false) {
		const user = new User({ email: email });
		user.save().catch((error: any) => console.log('error', error));
	}
	const hasBeenCreated = !exists;
	return hasBeenCreated;
};

export default createUser;
