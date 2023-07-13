import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const UserModels = mongoose.model('User', UserSchema);

const UserModel = UserModels;

export default UserModel
