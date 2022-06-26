import { User } from './models/index.js';

const deleteUser = (email: string) => {
	User.deleteOne({ email: email }).catch((error) => console.log(error));
};

export default deleteUser;
