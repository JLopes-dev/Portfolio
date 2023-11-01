import sequelize from "../database/databaseConfig";
import { DataTypes } from "sequelize";
const Question = sequelize.define('questions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Question;