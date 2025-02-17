import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Program = sequelize.define("Program", {
  id: { type: DataTypes.STRING, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  start_date: { type: DataTypes.DATE, allowNull: false }
});

export default Program;