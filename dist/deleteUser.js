import { User } from './models/index.js';
const deleteUser = (email) => {
    User.deleteOne({ email: email }).catch((error) => console.log(error));
};
export default deleteUser;
