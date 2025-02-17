import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerAdmin = async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const existingAdmin = await Admin.findOne({ where: { email } });
      if (existingAdmin) {
        return res.status(400).json({ message: "Admin already exists" });
      }
   
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const admin = await Admin.create({ email, password: hashedPassword });
  
      res.status(201).json({ message: "Admin created successfully", admin });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};