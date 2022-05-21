import mongoose from './index';
 
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    favCuisines: {
      type: Array,
      required: true,
    },
  }
);

const User = mongoose.model('user', UserSchema);
export default User;