import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import Program from "./Program.js";

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING, allowNull: false },
  program_id: { type: DataTypes.STRING, allowNull: true }
});

User.belongsTo(Program, { foreignKey: "program_id", onDelete: "SET NULL" });
export default User;
