import User from "../models/User.js";
export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, program_id } = req.body;
    const user = await User.create({ name, email, phone, program_id });
    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};