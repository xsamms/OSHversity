// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "../../lib/mongoDB";
import User from "../../model/userModel";
import bcrypt from "bcrypt";

connect();

const saltRounds = 12;

export default async function handler(req, res) {
  // const { name, email, phone, password, course, programDiscovery } = req.body;

  const passwordHash = await bcrypt.hash(req.body.password, saltRounds);

  try {
    const user = await User.create({
      fullname: req.body.fullname,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      password: passwordHash,
      qualification: req.body.qualification,
      course: req.body.course,
      country: req.body.country,
      programDiscovery: req.body.programDiscovery,
    });

    if (user) {
      res.status(200).json("User created successfully");
    }
    // res.redirect("/");
  } catch (error) {
    res.status(400).json("Unable to create user");
    console.log(error);
  }
}
