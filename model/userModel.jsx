const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    phonenumber: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    qualification: { type: String, required: true },
    course: { type: String, required: true },
    country: { type: String, required: true },
    programDiscovery: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
