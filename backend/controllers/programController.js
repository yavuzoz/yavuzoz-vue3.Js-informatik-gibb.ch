import Program from "../models/Program.js";

export const getPrograms = async (req, res) => {
  try {
    const programs = await Program.findAll();
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProgram = async (req, res) => {
  try {
    const { id, title, description, start_date } = req.body;
    const program = await Program.create({ id, title, description, start_date });
    res.status(201).json(program);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};