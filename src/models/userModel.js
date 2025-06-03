import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  status: { type: String, default: "active" },
});

const User = mongoose.model("User", userSchema);

export default User;
