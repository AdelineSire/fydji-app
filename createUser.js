import { User } from './models';

const createUser = async (email) => {
	let exists = (await User.find({ email: email }).count()) > 0;
	if (exists === false) {
		const user = new User({ email: email });
		user.save().catch((error) => console.log('error', error));
	}
};

export default createUser;
